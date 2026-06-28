import React, { useContext } from "react";
import styles from "./Dashboard.module.css";
{
  /*
import NotificationsIcon from '@mui/icons-material/Notifications';
import DescriptionIcon from '@mui/icons-material/Description';
import AttachFileIcon from '@mui/icons-material/AttachFile';*/
}
import ShowChartIcon from '@mui/icons-material/ShowChart';

import Skeleton from "@mui/material/Skeleton";
import WithAuthHOC from "../../utils/HOC/withAuthHOC";
import { useState } from "react";
import axios from "../../utils/axios";
import { AuthContext } from "../../utils/AuthContext";

const Dashboard = () => {
  const [uploaFileText, setUploadFileText] = useState("Upload your resume");

  const [loading, setLoading] = useState(false);
  const [resumefile, setResumeFile] = useState(null);
  const [jobDesc, setJobDesc] = useState("");

  const [result, setResult] = useState(null);

  const { userInfo } = useContext(AuthContext);

  console.log("userInfo:", userInfo);

  const handleOnChangeFile = (e) => {
    setResumeFile(e.target.files[0]);
    setUploadFileText(e.target.files[0].name);
  };

  const handleUpload = async () => {
    setResult(null);

    if (!jobDesc || !resumefile) {
      alert("Please fill job Description and Upload your resume!");
      return;
    }

    const formData = new FormData();
    formData.append("resume", resumefile);
    formData.append("job_desc", jobDesc);
    if (!userInfo?._id) {
      alert("User information is still loading");
      return;
    }

    formData.append("user", userInfo._id);
    setLoading(true);
    try {
      const result = await axios.post("/api/resume/addResume", formData);
      setResult(result.data.data);
    } catch (err) {
      console.log("Error Occurred", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.Dashboard}>
      <div className={styles.DashboardLeft}>
        <div className={styles.DashboardHeader}>
          <div className={styles.DashboardHeaderTitle1}>
            Smart Resume Screening
          </div>
          <div className={styles.DashboardHeaderTitle2}>Resume Match Score</div>
        </div>

        <div className={styles.InstructionBox}>
          <div>🔔 Important Instructions:</div>
          <div className={styles.Instructions}>
            <div>
              📝 Please paste the complete job description in the "Job
              Description" field before submitting
            </div>
            <div>📎 Only PDF format(.pdf) resumes are accepted</div>
          </div>
        </div>

        <div className={styles.uploadResume}>
          <div className={styles.resumeBlock}>{uploaFileText}</div>

          <div className={styles.DashboardinputField}>
            <label htmlFor="inputfield" className={styles.inputBtn}>
              Upload Resume
            </label>
            <input
              type="file"
              accept=".pdf"
              id="inputfield"
              onChange={handleOnChangeFile}
            />
          </div>
        </div>

        <div className={styles.jobDesc}>
          <textarea
            value={jobDesc}
            onChange={(e) => {
              setJobDesc(e.target.value);
            }}
            className={styles.textArea}
            placeholder="Paste your job Description"
            rows={10}
            cols={50}
          />

          <div className={styles.analyzeBtn} onClick={handleUpload}>
            Analyze
          </div>
        </div>
      </div>

      <div className={styles.DashboardRight}>
        <div className={styles.DashboardTopCard}>
          <div>Analyze with AI</div>
          {/*<img className={styles.profileImg} src={userInfo?.photoUrl} />*/}
          <img
              className={styles.profileImg}
              src={userInfo?.photoUrl}
              alt={userInfo?.name}
              referrerPolicy="no-referrer"
          />
          <div className={styles.topCardBottomContent}>{userInfo?.name}</div>
        </div>

        {result && (
          <div className={styles.ResultCard}>
            <div>Result</div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h1>{result?.score}%</h1>
              <ShowChartIcon sx={{ marginLeft: 2 }} />
            </div>
            <div className={styles.feedBack}>
              <h2>Feedback</h2>
              <p>
                {result?.feedback}
              </p>
            </div>
          </div>
        )}

        {loading && (
          <Skeleton
            variant="rectangular"
            sx={{ borderRadius: "20px" }}
            width={245}
            height={280}
          />
        )}
      </div>
    </div>
  );
};

export default WithAuthHOC(Dashboard);
