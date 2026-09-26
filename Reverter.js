(async () => {
  const url = "https://avatar.roblox.com/v1/avatar/thumbnail-customization";

  const send = async (thumbnailType, token = "") => {
    return fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": token
      },
      body: JSON.stringify({
        camera: { distanceScale: -1, fieldOfViewDeg: 30, yRotDeg: 0 },
        emoteAssetId: 0,
        thumbnailType
      })
    });
  };

  
  for (const type of [1, 2, 3]) {
    let res = await send(type);
    if (res.status === 403 && res.headers.get("x-csrf-token")) {
      res = await send(type, res.headers.get("x-csrf-token")); 
    }
    const body = await res.text();
    console.log(`thumbnailType ${type}:`, res.status, body);
  }


  const r = await fetch("https://avatar.roblox.com/v1/avatar/redraw-thumbnail", {
    method: "POST", credentials: "include", headers: { "X-CSRF-TOKEN": "" }
  });
  const t = r.headers.get("x-csrf-token");
  if (r.status === 403 && t) {
    await fetch("https://avatar.roblox.com/v1/avatar/redraw-thumbnail", {
      method: "POST", credentials: "include", headers: { "X-CSRF-TOKEN": t }
    });
  }
  console.log("Done. Hard-refresh your profile page.");
})();
