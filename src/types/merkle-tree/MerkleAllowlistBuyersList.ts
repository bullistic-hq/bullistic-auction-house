import { MerkleTree } from "@bullistic-hq/bullistic-program-shared";
import MerkleAllowlistBuyerWithProof from "types/merkle-tree/MerkleAllowlistBuyerWithProof";

type MerkleAllowlistBuyersList = {
  buyersChunk: Array<MerkleAllowlistBuyerWithProof>;
  tree: MerkleTree;
};

export default MerkleAllowlistBuyersList;
