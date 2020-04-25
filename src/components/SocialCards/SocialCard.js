/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";
import { upIcon, downIcon } from "../icons";

const styles = (theme, borderColor, todayColor) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: theme.color.ui[300],
    padding: 24,
    borderRadius: 3,
    borderTop: "5px solid",
    borderColor: borderColor
  },
  row: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  todayStyle: {
    color: todayColor
  }
});

export const SocialCard = ({ 
  borderColor, 
  icon, 
  acctName, 
  followers, 
  today 
}) => {
  const theme = useTheme();
  const isPostiveStatus = today > 0;
  
  const todayColor = isPostiveStatus 
    ? theme.color.status.positive 
    : theme.color.status.negative;

  const formatNumber = number => Math.abs(number); 
   
  const { container, row, todayStyle } = styles(theme, borderColor, todayColor);

  return (
    <div css={container}>
      <div css={row}>
        {icon}
        <p>{acctName}</p>
      </div>
      <p>{followers}</p>
      <p>Followers</p>
      <div css={[row, todayStyle]}>
        {isPostiveStatus ? upIcon : downIcon}
        <p>{formatNumber(today)}</p>
        <p>Today</p>
      </div>
    </div>
  );
};