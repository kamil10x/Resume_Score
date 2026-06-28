//import React, { useState } from 'react'
import styles from "./History.module.css";
import { Skeleton } from "@mui/material";
import WithAuthHOC from "../../utils/HOC/withAuthHOC";
import { useState, useEffect, useContext } from "react";
import axios from "../../utils/axios";
import { AuthContext } from "../../utils/AuthContext";
import { resume } from "react-dom/server";

const History = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  const { userInfo } = useContext(AuthContext);

  useEffect(() => {
  if (!userInfo?._id) return;

  const fetchUserData = async () => {
    setLoader(true);

    try {
      const results = await axios.get(
        `/api/resume/get/${userInfo._id}`
      );
      setData(results.data.resumes);
    } catch (err) {
      console.log(err);
    } finally {
      setLoader(false);
    }
  };

  fetchUserData();
}, [userInfo]);

  return (
    <div className={styles.History}>
      <div className={styles.HistoryCardBlock}>
        {loader && <>

              
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
        

        </>}

        {data.map((item, index) => {
          return (
            <div key={item._id} className={styles.HistoryCard}>
              <div className={styles.cardPercentage}>{item.score}%</div>
              {/*<h3>{Frontend Developer}</h3>*/}
              <p>Resume Name: {item.resume_name}</p>

              <p>
                {item.feedback}
              </p>

              <p>Dated: {item.createdAt.slice(0, 10)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WithAuthHOC(History);
