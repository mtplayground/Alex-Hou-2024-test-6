type AppEnv = Readonly<{
  DATABASE_URL: string;
}>;

const REQUIRED_ENV_VARS = ["DATABASE_URL"] as const;

type RequiredEnvVar = (typeof REQUIRED_ENV_VARS)[number];

function readRequiredEnv(name: RequiredEnvVar): string {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export function getEnv(): AppEnv {
  return {
    DATABASE_URL: readRequiredEnv(REQUIRED_ENV_VARS[0]),
  };
}

export const env = getEnv();
