import React, { useState } from "react";
import "./SubForm.css";

export default function HateLove(props) {
  const [formData, setFormData] = useState({
    prefs: {
      love: "",
      hate: "",
    },
  });

  const handleTextarea = (e, pref) => {
    if (pref === "love") {
      setFormData({
        prefs: {
          ...formData.prefs,
          love: e.target.value,
        },
      });
    } else if (pref === "hate") {
      setFormData({
        prefs: {
          ...formData.prefs,
          hate: e.target.value,
        },
      });
    }
  };

  const preventFunc = (e) => {
    e.preventDefault();
  };
  const handleReturn = () => {
    props.modifyIndex(4);
  };
  return (
    <form className="preferences-form" onSubmit={preventFunc}>
      <p>Parle-nous des aliments que tu préfères et que tu détestes ! </p>

      <label htmlFor="prefered">
        Tes aliments préférés, séparés par une virgule :{" "}
      </label>
      <textarea
        id="prefered"
        placeholder="Un ou plusieurs, si tu en as"
        onChange={(e) => handleTextarea(e, "love")}
      ></textarea>

      <label htmlFor="hated">
        Les aliments que tu ne supportes pas, séparés par une virgule :{" "}
      </label>
      <textarea
        id="prefehatedred"
        placeholder="Un ou plusieurs, si tu en as"
        onChange={(e) => handleTextarea(e, "hate")}
      ></textarea>
      <div className="container-nav-btns">
        <button type="button" onClick={handleReturn}>
          Précédent
        </button>
        <button onClick={() => props.modifyIndex(6, formData)}>Valider</button>
      </div>
    </form>
  );
}
