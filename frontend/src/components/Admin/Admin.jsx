import React, { useState, useEffect } from "react";
import styles from "./Admin.module.css";
import { Skeleton } from "@mui/material";
import WithAuthHOC from "../../utils/HOC/withAuthHOC";
import axios from "../../utils/axios";
import ReactMarkdown from "react-markdown";

const Admin = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
  const fetchAllData = async () => {
    setLoader(true);

    try {
      const results = await axios.get("/api/resume/get/admin");
      setData(results.data.resumes);
    } catch (err) {
      console.log(err);
      alert("Something Went wrong");
    } finally {
      setLoader(false);
    }
  };

  fetchAllData();
}, []);

  return (
    <div className={styles.Admin}>
      <div className={styles.AdminBlock}>
        {loader && (
          <>
            <Skeleton
              variant="rectangular"
              width={260}
              height={260}
              sx={{ borderRadius: "20px" }}
            />
            <Skeleton
              variant="rectangular"
              width={260}
              height={260}
              sx={{ borderRadius: "20px" }}
            />
            <Skeleton
              variant="rectangular"
              width={260}
              height={260}
              sx={{ borderRadius: "20px" }}
            />
            <Skeleton
              variant="rectangular"
              width={260}
              height={260}
              sx={{ borderRadius: "20px" }}
            />
          </>
        )}

        {data.map((item) => {
  return (
    <div key={item._id} className={styles.AdminCard}>
      <h3>{item.user?.name}</h3>
      <p style={{ color: "blue" }}>{item?.user?.email}</p>
      <h4>Score: {item.score}%</h4>
      <ReactMarkdown>
  {item.feedback}
</ReactMarkdown>
    </div>
  );
})}
      </div>
    </div>
  );
};

export default WithAuthHOC(Admin);
