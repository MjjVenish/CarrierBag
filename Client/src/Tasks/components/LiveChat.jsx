import { FiHelpCircle } from "react-icons/fi";
import no from "../../assets/no.png";

const LiveChat = () => {
  return (
    <div className=" flex live-chat">
      <div className="relative">
        <div className="nor">
          <img src={no} alt="" />
        </div>
        <div>
          <h4>
            <FiHelpCircle className="he" /> Live Chat
          </h4>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
