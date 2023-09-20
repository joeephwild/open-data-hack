import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "Ua-VslmNP6OZo1dQELkNjK93TmwAZc0_";

const useMeetingApi = () => {
  const [roomId, setRoomId] = useState("");
  const [liveMeetingData, setLiveMeetingData] = useState(null);

  const createMeeting = async () => {
    try {
      const { data } = await axios.post(
        "https://api.huddle01.com/api/v1/create-iframe-room",
        {
          title: "Huddle01-Test",
          roomLocked: false,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": API_KEY,
          },
        }
      );
      setRoomId(data.data.roomId);
    } catch (error) {
      console.log(error);
    }
  };

  const getLiveSpace = async () => {
    try {
      const response = await axios.get(
        "https://api.huddle01.com/api/v1/live-meeting",
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": API_KEY,
          },
        }
      );
      setLiveMeetingData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // You can call any initial data fetching functions here if needed.
  }, []);

  return {
    roomId,
    liveMeetingData,
    createMeeting,
    getLiveSpace,
  };
};

export default useMeetingApi;
