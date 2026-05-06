const requiredServerEnv = ["DATABASE_URL"];

const missingServerEnv = requiredServerEnv.filter((name) => {
  return !process.env[name]?.trim();
});

if (missingServerEnv.length > 0) {
  throw new Error(
    `Missing required environment variables: ${missingServerEnv.join(", ")}`,
  );
}

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
