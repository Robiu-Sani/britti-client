import React from "react";
import AllResults from "./AllResults";
import DownloadPdfWrapper from "../../components/DownloadPdfWraper";

export default function page() {
  return (
    <div>
      <DownloadPdfWrapper>
        <AllResults />
      </DownloadPdfWrapper>
    </div>
  );
}
