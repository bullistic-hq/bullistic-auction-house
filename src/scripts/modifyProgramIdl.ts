import modifyProgramIdlScript from "@bullistic-hq/bullistic-program-shared/dist/scripts/modifyProgramIdlScript";

modifyProgramIdlScript({
  decodedTransactionResultTypeFilePath:
    "src/types/DecodedAuctionHouseTransactionResult.ts",
  idlFilePath: "src/idl/AuctionHouse.ts",
  programName: "AuctionHouse",
});
