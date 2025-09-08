import PropTypes from "prop-types";
import { Avatar, Typography } from "@material-tailwind/react";

export function MessageCard({ img, name, message, action, darkMode }) {
  return (
    <div
      className={`relative flex items-center justify-between gap-4 p-6 rounded-[2.5em] shadow-md transition-all duration-300 hover:scale-[0.97] active:scale-90 cursor-pointer ${
        darkMode ? "bg-[#0d1b4c] text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex items-center gap-4">
        <Avatar
          src={img}
          alt={name}
          variant="rounded"
          className="shadow-lg shadow-blue-gray-500/25"
        />
        <div>
          <Typography
            variant="small"
            className={`mb-1 font-semibold ${
              darkMode ? "text-white" : "text-blue-gray-800"
            }`}
          >
            {name}
          </Typography>
          <Typography
            className={`text-xs font-normal ${
              darkMode ? "text-gray-300" : "text-blue-gray-400"
            }`}
          >
            {message}
          </Typography>
        </div>
      </div>
      {action}
    </div>
  );
}

MessageCard.defaultProps = {
  action: null,
  darkMode: false,
};

MessageCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  message: PropTypes.node.isRequired,
  action: PropTypes.node,
  darkMode: PropTypes.bool,
};

MessageCard.displayName = "/src/widgets/cards/message-card.jsx";

export default MessageCard;
