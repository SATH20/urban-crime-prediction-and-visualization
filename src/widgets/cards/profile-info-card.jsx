import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  Typography
} from "@material-tailwind/react";

export function ProfileInfoCard({ title, description, details, action, darkMode }) {
  return (
    <Card
      shadow={false}
      className={`relative ${
        darkMode ? "bg-[#0d1b4c] text-white" : "bg-[#ffffff] text-black"
      } rounded-[2.5em] p-8 transition-all duration-300 hover:scale-[0.97] active:scale-90 cursor-pointer`}
    >
      <CardHeader
        color="transparent"
        shadow={false}
        floated={false}
        className="mx-0 mt-0 mb-4 flex items-center justify-between gap-4 p-0"
      >
        <Typography variant="h6" color={darkMode ? "white" : "blue-gray"}>
          {title}
        </Typography>
        {action}
      </CardHeader>

      <CardBody className="p-0">
        {description && (
          <Typography
            variant="small"
            className={`font-normal ${darkMode ? "text-gray-300" : "text-blue-gray-500"}`}
          >
            {description}
          </Typography>
        )}
        {description && details ? <hr className={`my-8 ${darkMode ? "border-gray-600" : "border-blue-gray-50"}`} /> : null}
        {details && (
          <ul className="flex flex-col gap-4 p-0">
            {Object.keys(details).map((el, key) => (
              <li key={key} className="flex items-center gap-4">
                <Typography
                  variant="small"
                  className={`font-semibold capitalize ${darkMode ? "text-white" : "text-blue-gray-800"}`}
                >
                  {el}:
                </Typography>
                {typeof details[el] === "string" ? (
                  <Typography
                    variant="small"
                    className={`font-normal ${darkMode ? "text-gray-300" : "text-blue-gray-500"}`}
                  >
                    {details[el]}
                  </Typography>
                ) : (
                  details[el]
                )}
              </li>
            ))}
          </ul>
        )}
      </CardBody>
    </Card>
  );
}

ProfileInfoCard.defaultProps = {
  action: null,
  description: null,
  details: {},
  darkMode: false,
};

ProfileInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.node,
  details: PropTypes.object,
  action: PropTypes.node,
  darkMode: PropTypes.bool,
};

ProfileInfoCard.displayName = "/src/widgets/cards/profile-info-card.jsx";

export default ProfileInfoCard;
