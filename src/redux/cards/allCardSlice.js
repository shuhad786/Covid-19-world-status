import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const DISPLAY_MISSION = 'space-traveler/missions/DISPLAY_MISSION';
const baseUrl = 'https://api.spacexdata.com/v3/missions';

export const displayMission = createAsyncThunk((DISPLAY_MISSION), async () => {
  const response = await axios.get(baseUrl);
  return response.data;
});

const missionSlice = createSlice({
  name: 'mission',
  initialState: {
    missions: [],
  },
  reducers: {
    joinMission: (state, action) => {
      const update = state;
      const newState = update.missions.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, reserved: true };
        }
        return mission;
      });
      update.missions = newState;
    },
    cancelMission: (state, action) => {
      const update = state;
      const newState = update.missions.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, reserved: false };
        }
        return mission;
      });
      update.missions = newState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(displayMission.fulfilled, (state, action) => {
      const update = state;
      update.missions = action.payload.map((mission) => ({ ...mission, reserved: false }));
    });
  },
});

export const { joinMission, cancelMission } = missionSlice.actions;
export default missionSlice;