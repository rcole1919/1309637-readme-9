import { Document, Model } from 'mongoose';
import { NotFoundException } from '@nestjs/common';

import { Entity, StorableEntity, EntityFactory } from '@project/core';
import { Repository } from './repository.interface';

export abstract class BaseMongoRepository<
  T extends Entity & StorableEntity<ReturnType<T['toPOJO']>>,
  DocumentType extends Document,
> implements Repository<T> {
  constructor(
    protected entityFactory: EntityFactory<T>,
    protected readonly model: Model<DocumentType>
  ) {}

  protected createEntityFromDocument(document: DocumentType): T  {
    // const POJO = document.toObject({ versionKey: false });
    // const documentId = String(document._id);
    // const plainObject = { id: documentId, ...POJO } as ReturnType<T['toPOJO']>;
    const plainObject = document.toObject({ getters: true, versionKey: false, flattenObjectIds: true }) as ReturnType<T['toPOJO']>;
    return this.entityFactory.create(plainObject);
  }

  public async findById(id: T['id']): Promise<T | null> {
    const document = await this.model.findById(id).exec();
  
    if (!document) {
      throw new NotFoundException(`Entity with ${id} not found`);
    }
  
    return this.createEntityFromDocument(document);
  }

  public async save(entity: T): Promise<void> {
    const newEntity = new this.model(entity.toPOJO());
    await newEntity.save();

    entity.id = String(newEntity._id);
  }

  public async update(entity: T): Promise<void> {
    const updatedDocument = await this.model.findByIdAndUpdate(
      entity.id,
      entity,
      { new: true, runValidators: true },
    ).exec();

    if (!updatedDocument) {
      throw new NotFoundException(`Entity with ${entity.id} not found`);
    }
  }

  public async deleteById(id: T['id']): Promise<void> {
    const deletedDocument = await this.model.findByIdAndDelete(id).exec();

    if (!deletedDocument) {
      throw new NotFoundException(`Entity with ${id} not found`);
    }
  }
}
