import { PdaResult } from "@bullistic-hq/bullistic-program-shared";
import { PublicKey } from "@solana/web3.js";
import { EDITION_DISTRIBUTOR } from "constants/SolanaConstants";

export default function findEditionDistributor(
  mint: PublicKey,
  auctionHouseProgramId: PublicKey
): PdaResult {
  return PublicKey.findProgramAddressSync(
    [Buffer.from(EDITION_DISTRIBUTOR), mint.toBuffer()],
    auctionHouseProgramId
  );
}
