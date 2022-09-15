import React from "react";
import DestinyBg from "../../assets/destination/background-destination-desktop.jpg";

const Destination = () => {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);

    setLoading(false);
  }, []);

  if (loading) return <div>Caregando...</div>;
  return (
    <div>
      Destination
      {
        <style global jsx>{`
          body {
            background-image: url(${DestinyBg.src});
            background-repeat: no-repeat;
            background-size: cover;
          }
        `}</style>
      }
    </div>
  );
};

export default Destination;
