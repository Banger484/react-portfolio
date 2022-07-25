import { useState } from "react";

export default function Resume() {
  const [page, setPage] = useState(1);

  return (
    <div className="resume-container">
      <div className="resume-download">
        <button className="resume-download-button" href="/resume/bretbanger-resume.pdf" download onClick={() => {console.log('something')}}>
           Download my Resume <img className="download-icon" src="/images/pdf-download-2.png" />
        </button>
      </div>

    </div>
  );
}
