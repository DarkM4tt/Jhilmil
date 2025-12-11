const Badge = ({ type, text }) => {
  const styles = {
    active: "bg-green-100 text-green-700 border-green-200",
    inactive: "bg-gray-100 text-gray-600 border-gray-200",
    care: "bg-blue-50 text-blue-600 border-blue-100",
    default: "bg-gray-50 text-gray-700 border-gray-200",
  };

  let selectedStyle = styles.default;

  if (type) {
    selectedStyle = styles[type] || styles.default;
  } else if (text) {
    const lowerText = text.toLowerCase();
    if (lowerText === "active") selectedStyle = styles.active;
    else if (lowerText === "inactive") selectedStyle = styles.inactive;
    else selectedStyle = styles.care;
  }

  return (
    <span
      className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${selectedStyle}`}
    >
      {text}
    </span>
  );
};

export default Badge;
