import "./widgetSm.css";
import { Visibility } from '@mui/icons-material';
import { useEffect, useState } from "react";
import axios from "axios";
export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/users/find/", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODYyYmIzMjFjNTg3ZTZhODFiNTU5NCIsImlhdCI6MTY2OTkxOTY5M30.Ab_BX1EG2H9MwlwlYlRXWS-Ya1TjV77ZEHbKjUcR2-I",
          },
        });
        setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, []);
    return (
      <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
          {newUsers.map((user) => (
            <li className="widgetSmListItem">
              <img
                src={
                  user.profilePic ||
                  "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
                }
                alt=""
                className="widgetSmImg"
              />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">{user.username}</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }