import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import ButtonBackToHome from "../Components/button-BackToHome";
import SubHeading from "../Components/subHeading";
import "../css/modal.css";
import rankdata from "../data/rankdata.json";
import db from "../firebase";

const ScoreModal = (props) => {
  const [ranking, setRanking] = useState(null);
  // タイピング速度
  const typeSpeed = props.correctCount / 60;
  const typeSpeedContext = typeSpeed.toFixed(2);
  // ランク
  let rankTmp;
  if (1 >= typeSpeedContext) {
    rankTmp = 6;
  } else if (1.33 >= typeSpeedContext) {
    rankTmp = 7;
  } else if (1.66 >= typeSpeedContext) {
    rankTmp = 8;
  } else if (2 >= typeSpeedContext) {
    rankTmp = 9;
  } else if (2.33 >= typeSpeedContext) {
    rankTmp = 10;
  } else if (2.66 >= typeSpeedContext) {
    rankTmp = 11;
  } else if (3 >= typeSpeedContext) {
    rankTmp = 12;
  } else if (3.33 >= typeSpeedContext) {
    rankTmp = 13;
  } else if (3.66 >= typeSpeedContext) {
    rankTmp = 14;
  } else if (4 >= typeSpeedContext) {
    rankTmp = 15;
  } else if (4.33 >= typeSpeedContext) {
    rankTmp = 16;
  } else if (4.66 >= typeSpeedContext) {
    rankTmp = 17;
  } else if (5 >= typeSpeedContext) {
    rankTmp = 18;
  } else if (5.33 >= typeSpeedContext) {
    rankTmp = 19;
  } else if (5.66 >= typeSpeedContext) {
    rankTmp = 20;
  } else if (6 >= typeSpeedContext) {
    rankTmp = 21;
  } else if (6.33 >= typeSpeedContext) {
    rankTmp = 22;
  } else if (6.66 >= typeSpeedContext) {
    rankTmp = 23;
  } else if (7 >= typeSpeedContext) {
    rankTmp = 24;
  } else {
    rankTmp = 25;
  }
  rankTmp = rankTmp - Math.floor(props.missCount / 10);
  const rank = rankdata.rankdata.filter(function (value) {
    if (0 > rankTmp) rankTmp = 0;
    return value.score === rankTmp;
  });

  /**
   * レコード追加処理
   * ※1：すべての値が同じレコードが存在する場合はレコード追加を行わない（画面更新の際に二重登録を防ぐため）
   * ※2：登録済みのレコードが99件以上だった場合、一番古いレコードを削除する
   * @returns
   */
  const addScoreToDB = async () => {
    try {
      // 全レコードを取得
      const queryData = [];
      const querySnapshot = await getDocs(collection(db, "scores"));
      querySnapshot.forEach((doc) => {
        const score = [];
        score.push(doc.id);
        score.push(doc.data().score.rank[0].score);
        score.push(doc.data().score.typeSpeed);
        score.push(doc.data().score.missCount);
        score.push(doc.data().score.playDate);
        queryData.push(score);
      });
      // すべての値が同じレコードが存在する場合はレコード追加を行わない
      for (let index = 0; index < queryData.length; index++) {
        if (
          queryData[index][1] === rank[0].score &&
          queryData[index][2] === typeSpeed &&
          queryData[index][3] === props.missCount
        )
          return;
      }
      // レコード追加
      await addDoc(collection(db, "scores"), {
        score: {
          rank,
          typeSpeed,
          missCount: props.missCount,
          playDate: serverTimestamp(),
        },
      });
      // レコードが99件以上だった場合、一番古いレコードを削除する
      queryData.sort((a, b) => {
        // "playDate"でソート
        if (a[4] < b[4]) return -1;
        if (a[4] > b[4]) return 1;
        return 0;
      });
      for (
        let deleteCount = queryData.length;
        deleteCount >= 99;
        deleteCount--
      ) {
        await deleteDoc(doc(db, "scores", queryData[0][0]));
        queryData.shift();
      }
    } catch (error) {
      console.error("DBの更新中にエラーが発生しました:", error);
    }
  };

  const calculationRanking = async () => {
    try {
      // 全レコードを取得
      const queryData = [];
      const querySnapshot = await getDocs(collection(db, "scores"));
      querySnapshot.forEach((doc) => {
        const score = [];
        score.push(doc.data().score.rank[0].score);
        score.push(doc.data().score.typeSpeed);
        score.push(doc.data().score.missCount);
        queryData.push(score);
      });
      queryData.sort((a, b) => {
        // 「ランクの高い順 => タイピングスピードの速い順 => ミスの少ない順」でソート
        if (a[0] < b[0]) return 1;
        if (a[0] > b[0]) return -1;
        if (a[1] < b[1]) return 1;
        if (a[1] > b[1]) return -1;
        if (a[2] < b[2]) return -1;
        if (a[2] > b[2]) return 1;
        return 0;
      });
      // ランキングを判定
      for (let index = 0; index < queryData.length; index++) {
        if (queryData[index][0] <= rank[0].score) {
          if (queryData[index][1] < typeSpeed) {
            setRanking(index + 1);
            break;
          } else if (queryData[index][1] === typeSpeed) {
            if (queryData[index][2] >= props.missCount) {
              setRanking(index + 1);
              break;
            }
          }
        }
      }
    } catch (error) {
      console.error("ランキングの計測中にエラーが発生しました:", error);
    }
  };

  useEffect(() => {
    (async () => {
      await calculationRanking();
      await addScoreToDB();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // HTML
  return (
    <>
      <div tabIndex={1} id="overlay_02">
        <div id="modalContent_02">
          <SubHeading subHeading="SCORE" />

          <div className="p-8">
            <div className="p-4 m-4 border-b-2 border-sky-700/50">
              <p className="font-bold text-sky-700 text-center mb-2">
                ランキング
              </p>
              <p className="text-center font-semibold">
                <span className="text-2xl">{ranking}</span> 位
              </p>
            </div>
          </div>
          <div className="px-8 pb-8">
            <div className="p-4 m-4 border-b-2 border-sky-700/50">
              <p className="font-bold text-sky-700 text-center mb-2">ランク</p>
              <p className="text-center font-semibold">
                <span className="text-2xl">{rank[0].rank}</span>
              </p>
            </div>
          </div>
          <div className="px-8 pb-8">
            <div className="p-4 m-4 border-b-2 border-sky-700/50">
              <p className="font-bold text-sky-700 text-center mb-2">
                タイピング速度
              </p>
              <p className="text-center font-semibold">
                <span className="text-2xl">{typeSpeedContext}</span> /s
              </p>
            </div>
          </div>
          <div className="px-8 pb-8">
            <div className="p-4 m-4 border-b-2 border-sky-700/50">
              <p className="font-bold text-sky-700 text-center mb-2">
                ミスタイプ数
              </p>
              <p className="text-center font-semibold">
                <span className="text-2xl">{props.missCount}</span> 回
              </p>
            </div>
          </div>

          <div className="p-8">
            <ButtonBackToHome
              se={props.se}
              setCorrectCount={props.setCorrectCount}
              setMissCount={props.setMissCount}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ScoreModal;
