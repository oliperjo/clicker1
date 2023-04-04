import styled from "styled-components";
import { colorPalette } from "../styles/theme";
import { formatNumber } from "../utils";
import { User } from "../types";

interface Props {
  userProfile: User;
}

export const StatsInfo = ({ userProfile }: Props) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Points: {formatNumber(userProfile.points)}</h2>
      <span>Max Points: {formatNumber(userProfile.maxPoints)}</span>
      <br />
      <span>Clicks: {userProfile.clicks}</span>
      <br />
      <span>Multiplier: {formatNumber(userProfile.multiplier)}</span>
      <br />
      <span>Per Second: {formatNumber(userProfile.perSecond)}</span>
      <br />
    </div>
  );
};