export interface FileVaultConfig {
  environment: string;
  port: number;
  uploadDirectory: string;
  serveRoot: string;
  db: {
    host: string;
    port: number;
    user: string;
    name: string;
    password: string;
    authBase: string;
  }
}
