import React from "react";

export default function VideoShowcase() {
  // Function to handle direct media opening
  const openMedia = (mediaUrl) => {
    window.open(mediaUrl, '_blank');
  };

  return (
    <div className="showcase">
      {/* Center logo */}
      <div className="card depth-level-1 center-logo">
        <div 
          className="whole-thang-is-a-target cursor-pointer" 
          onClick={() => openMedia("/images/DevHiveLogo (1).png")}
        >
          <img src="/images/DevHiveLogo (1).png" alt="DevHive Logo" />
        </div>
      </div>
      
      {/* Supporting item 1 */}
      <div className="card depth-level-2 supporting-item-1">
        <div 
          className="whole-thang-is-a-target cursor-pointer" 
          onClick={() => openMedia("/videos/DevHiveBoard.mp4")}
        >
          <video
            preload
            playsInline
            muted
            autoPlay
            loop
            src="/videos/DevHiveBoard.mp4"
          ></video>
        </div>
      </div>
      
      {/* Supporting item 2 */}
      <div className="card depth-level-3 supporting-item-2">
        <div 
          className="whole-thang-is-a-target cursor-pointer" 
          onClick={() => openMedia("/images/DevHiveLaunch.png")}
        >
          <img src="/images/DevHiveLaunch.png" alt="DevHive Features" />
        </div>
      </div>

      {/* Supporting item 3 */}
      <div className="card depth-level-2 supporting-item-3">
        <div 
          className="whole-thang-is-a-target cursor-pointer" 
          onClick={() => openMedia("/images/Backlog.png")}
        >
          <img src="/images/Backlog.png" alt="DevHive Backlog" />
        </div>
      </div>

      {/* Supporting item 4 */}
      <div className="card depth-level-3 supporting-item-4">
        <div 
          className="whole-thang-is-a-target cursor-pointer" 
          onClick={() => openMedia("/images/ProjectDetails.png")}
        >
          <img src="/images/ProjectDetails.png" alt="DevHive Project Details" />
        </div>
      </div>

      {/* Flipped card */}
      <div className="card depth-level-1 flipped-card">
        <div 
          className="whole-thang-is-a-target cursor-pointer" 
          onClick={() => openMedia("/images/DevHiveAccountDetails.png")}
        >
          <img src="/images/DevHiveAccountDetails.png" alt="Flipped DevHive Demo" />
        </div>
      </div>
    </div>
  );
}
