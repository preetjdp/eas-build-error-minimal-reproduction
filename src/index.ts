import {
  Attestation,
  EAS,
  NO_EXPIRATION,
  SchemaEncoder,
  ZERO_BYTES32,
} from "@ethereum-attestation-service/eas-sdk";

const main = () => {
  const schemaEncoder = new SchemaEncoder(
    "string hackathon_uuid,string user_uuid,string quadratic_voting_uuid,(bytes32 project_slug, uint8 value)[] map"
  );
  console.log("hello");
};

main();
