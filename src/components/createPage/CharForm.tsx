import { useState } from "react";
import { JabEndType, FinalTargType } from "../../types/character";

// BASIC INPUT MODULES
type Input = {
  item: string;
  label: string;
  value: any;
  handler: any;
  className?: string;
};

function TextInput({ item, label, value, handler, className }: Input) {
  return (
    <div className={`txtInput ${className}`}>
      <label htmlFor={item}>{label}</label>
      <input type="text" id={item} name={item} value={value} onChange={handler} />
      <br />
    </div>
  );
}

function TextAreaSglInput({ item, label, value, handler }: Input) {
  return (
    <div className="areaInput areaSglInput">
      <label htmlFor={item}>{label}</label>
      <textarea id={item} name={item} value={value} onChange={handler}></textarea>
      <br />
    </div>
  );
}

function TextAreaDblInput({ item, label, value, handler }: Input) {
  return (
    <div className="areaInput areaDblInput">
      <h5>{label}</h5>
      <label htmlFor={`${item}.name`}>Name</label>
      <input type="text" id={`${item}.name`} name={`${item}.name`} value={value.name} onChange={handler} />
      <br />
      <label htmlFor={`${item}.desc`}>Description</label>
      <textarea id={`${item}.desc`} name={`${item}.desc`} value={value.desc} onChange={handler}></textarea>
    </div>
  );
}


// SPECIFIC INPUT MODULES
export function CharFormHead({ character, handler, submit }) {
  return (
    <section>
      <TextInput item="name" label="Character Name" value={character.name} handler={handler} className="formHead" />
      <TextInput item="auth" label="Character Author" value={character.auth} handler={handler} className="formHead" />
      <button type='submit' onClick={submit} className="submitBtn">Log State/Submit</button>
    </section>
  );
}


function JumpInput({ character, handler }) {
  return (
    <>
      <label htmlFor="jumps"># of Jumps</label>
      <select id="jumps" name="jumps" value={character.jumps} onChange={handler}>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
      </select>
      <br />
    </>
  );
}

function WeightInput({ character, handler }) {
  return (
    <>
      <label htmlFor="weight">Character Weight</label>
      <input type="range" id="weight" min="62" value={character.weight} max="135" onChange={handler} />
      <output>{character.weight}</output>
      <br />
    </>
  );
}

function FinalSmashInput({ character, handler }) {
  return (
    <>
      <h5>Final Smash Attack</h5>
      <TextInput item='finalSmash.name' label='Name' value={character.finalSmash.name} handler={handler} />
      <label htmlFor="finalSmash.targetStyle">Targeting Style</label>
      <select id="finalSmash.targetStyle" name="finalSmash.targetStyle" value={character.finalSmash.targetStyle} onChange={handler}>
        <option value={FinalTargType.Projectile}>Projectile</option>
        <option value={FinalTargType.Area}>Area</option>
        <option value={FinalTargType.Reticle}>Reticle</option>
      </select>
      <br />
      <TextAreaSglInput item='finalSmash.desc' label='Description' value={character.finalSmash.desc} handler={handler} />
    </>
  );
}


function JabInput({ character, handler }) {
  return (
    <>
      <h5>Neutral (Jab) Attack</h5>
      <TextInput item="jab.name" label="Name" value={character.jab.name} handler={handler} />
      <label htmlFor="jab.stages"># of Stages</label>
      <select id="jab.stages" name="jab.stages" value={character.jab.stages} onChange={handler}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <br />
      <label htmlFor="jab.endType">Jab Combo End Type</label>
      <select id="jab.endType" name="jab.endType" value={character.jab.endType} onChange={handler}>
        <option value={JabEndType.Standard}>Standard</option>
        <option value={JabEndType.Choosable}>Choosable</option>
        <option value={JabEndType.Infinite}>Infinite</option>
      </select>
      <br />
      <TextAreaSglInput item="jab.desc" label="Description" value={character.jab.desc} handler={handler}  />
    </>
  );
}

// PAGE SECTION CREATOR
interface CreateSectionProps {
  title: string;
  children: any;
}

function PageSection({ title, children }: CreateSectionProps) {
  const [sectionOpen, setSectionOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setSectionOpen(!sectionOpen);
  };

  return (
    <section>
      <button onClick={handleClick}>{title}</button>
      <br />
      <div className={sectionOpen ? "" : "hide"}>{children}</div>
    </section>
  );
}


// MAIN FORM
function CharForm({ character }) {
  const [char, setChar] = useState(character);

  // EVENT HANDLERS
  const onChange = (e) => {
    const { name, value } = e.target;
    setChar((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onNestedChange = (e) => {
    const { name, value } = e.target;
    const nestObj = name.split(".")[0];
    const nestProp = name.split(".")[1];
    setChar((prev) => ({
      ...prev,
      [nestObj]: {
        ...prev[nestObj],
        [nestProp]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const output = JSON.stringify(char, null, 2);
    console.log(output);
  }

  //FORM
  return (
    <form>
      <CharFormHead character={char} handler={onChange} submit={handleSubmit} />
      <PageSection title="General">
        <TextInput item="phrase" label="Catchphrase" value={char.phrase} handler={onChange} />
        <JumpInput character={char} handler={onChange} />
        <WeightInput character={char} handler={onChange} />
        <TextAreaSglInput item="specPerk" label="Special Perk" value={char.specPerk} handler={onChange} />
        <FinalSmashInput character={char} handler={onNestedChange} />
      </PageSection>
      <PageSection title="Basic Attacks">
        <JabInput character={char} handler={onNestedChange} />
        <TextAreaDblInput item="dash" label="Dash Attack" value={char.dash} handler={onChange} />
        <TextAreaDblInput item="tiltSd" label="Side Tilt Attack" value={char.tiltSd} handler={onChange} />
        <TextAreaDblInput item="tiltUp" label="Upward Tilt Attack" value={char.tiltUp} handler={onChange} />
        <TextAreaDblInput item="tiltDn" label="Downward Tilt Attack" value={char.tiltDn} handler={onChange} />
      </PageSection>
      <PageSection title="Smash Attacks">
        <TextAreaDblInput item="smashSd" label="Side Smash Attack" value={char.smashSd} handler={onChange} />
        <TextAreaDblInput item="smashUp" label="Upward Smash Attack" value={char.smashUp} handler={onChange} />
        <TextAreaDblInput item="smashDn" label="Downward Smash Attack" value={char.smashDn} handler={onChange} />
      </PageSection>
      <PageSection title="Special Attacks">
        <TextAreaDblInput item="specNt" label="Neutral Special Attack" value={char.specNt} handler={onChange} />
        <TextAreaDblInput item="specSd" label="Side Special Attack" value={char.specSd} handler={onChange} />
        <TextAreaDblInput item="specUp" label="Upward Special Attack" value={char.specUp} handler={onChange} />
        <TextAreaDblInput item="specDn" label="Downward Special Attack" value={char.specDn} handler={onChange} />
      </PageSection>
      <PageSection title="Aerial Attacks">
        <TextAreaDblInput item="airNt" label="Neutral Aerial Attack" value={char.airNt} handler={onChange} />
        <TextAreaDblInput item="airFw" label="Forward Aerial Attack" value={char.airFw} handler={onChange} />
        <TextAreaDblInput item="airUp" label="Upward Aerial Attack" value={char.airUp} handler={onChange} />
        <TextAreaDblInput item="airDn" label="Downward Aerial Attack" value={char.airDn} handler={onChange} />
        <TextAreaDblInput item="airBk" label="Backward Aerial Attack" value={char.airBk} handler={onChange} />
      </PageSection>
      <PageSection title="Grabs & Throws">
        <TextAreaDblInput item="grab" label="Grab" value={char.grab} handler={onChange} />
        <TextAreaDblInput item="pummel" label="Pummel (after Grab)" value={char.pummel} handler={onChange} />
        <TextAreaDblInput item="thrUp" label="Upward Throw (after Grab)" value={char.thrUp} handler={onChange} />
        <TextAreaDblInput item="thrFw" label="Forward Throw (after Grab)" value={char.thrFw} handler={onChange} />
        <TextAreaDblInput item="thrDn" label="Downward Throw (after Grab)" value={char.thrDn} handler={onChange} />
        <TextAreaDblInput item="thrBk" label="Backward Throw (after Grab)" value={char.thrBk} handler={onChange} />
      </PageSection>
      <PageSection title="Taunts">
        <TextAreaDblInput item="tauntSd" label="Side Taunt" value={char.tauntSd} handler={onChange} />
        <TextAreaDblInput item="tauntUp" label="Upward Taunt" value={char.tauntUp} handler={onChange} />
        <TextAreaDblInput item="tauntDn" label="Downward Taunt" value={char.tauntDn} handler={onChange} />
      </PageSection>
    </form>
  );
}

export default CharForm;