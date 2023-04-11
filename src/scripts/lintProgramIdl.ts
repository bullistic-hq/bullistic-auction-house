import lintProgramIdlScript from "@bullistic-hq/bullistic-program-shared/dist/scripts/lintProgramIdlScript";

function lintProgramIdl() {
  lintProgramIdlScript("src/idl/AuctionHouse.ts");
}

lintProgramIdl();
