import { useState } from 'react';
import { JabEndType, FinalTargType } from '../types/character'
import './form.css'

type Input = {
    item: string,
    label: string
}

function TextInput({item, label}: Input) {
    return (
        <>
            <label htmlFor={item}>{label}</label>
            <input type='text' id={item} /><br/>
        </>
    )
}

function BasicPairInput({item, label}: Input) {
    return (
        <>
            <h5>{label}</h5>
            <label htmlFor={`${item}.name`}>Name</label>
            <input type='text' id={`${item}.name`} /><br/>
            <label htmlFor={`${item}.desc`}>Description</label>
            <textarea id={`${item}.desc`}></textarea>
        </>
    )
}

function JumpInput() {
    return (
        <>
            <label htmlFor="jumps"># of Jumps</label>
            <select id="jumps">
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
            </select><br/>
        </>
    )
}

function WeightInput() {
    const [weight, setWeight] = useState(100)
    
    function handleChange(event) {
        setWeight(event.target.value)
    } 
    return (
        <>
            <label htmlFor="weight">Character Weight</label>
            <input type="range" id="weight" min="62" defaultValue={weight} value={weight} max="135" onChange={handleChange}/>
            <output>{weight}</output><br/>
        </>
    )
}

function SpecPerkInput() {
    return (
        <>
            <label htmlFor="specPerk">Special Perk</label>
            <textarea id="specPerk"></textarea><br/>
        </>
    )
}

function JabInput() {
    return(
        <>
            <h5>Neutral (Jab) Attack</h5>
            <label htmlFor="jab.name">Name</label>
            <input type="text" id="jab.name" /><br/>
            <label htmlFor="jab.stages"># of Stages</label>
            <select id="jab.stages">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select><br/>
            <label htmlFor="jab.endType">Jab Combo End Type</label>
            <select id="jab.endType">
                <option value={JabEndType.Standard}>Standard</option>
                <option value={JabEndType.Choosable}>Choosable</option>
                <option value={JabEndType.Infinite}>Infinite</option>
            </select><br/>
            <div className="textArea">
                <label htmlFor="jab.desc">Description</label>
                <textarea id="jab.desc"></textarea>
            </div>
        </>
    )
}

function FinalSmashInput() {
    return(
        <>
            <h5>Final Smash Attack</h5>
            <label htmlFor="finalSmash.name">Name</label>
            <input type="text" id="finalSmash.name" /><br/>
            <label htmlFor="finalSmash.targetStyle">Targeting Style</label>
            <select id="finalSmash.targetStyle">
                <option value={FinalTargType.Projectile}>Projectile</option>
                <option value={FinalTargType.Area}>Area</option>
                <option value={FinalTargType.Reticle}>Reticle</option>
            </select><br/>
            <div className="textArea">
                <label htmlFor="finalSmash.desc">Description</label>
                <textarea id="finalSmash.desc"></textarea>
            </div>
        </>
    )

}

export function CharForm() {
    return (
        <>
            <h2>General Character Traits</h2>
            <TextInput item="name" label="Character Name" />
            <TextInput item="phrase" label="Catchphrase" />
            <JumpInput />
            <WeightInput />
            <SpecPerkInput />
            <FinalSmashInput />
            <h2>Basic Attacks</h2>
            <JabInput />
            <BasicPairInput item="dash" label="Dash Attack" />
            <BasicPairInput item="tiltUp" label="Upward Tilt Attack" />
            <BasicPairInput item="tiltSd" label="Side Tilt Attack" />
            <BasicPairInput item="tiltDn" label="Downward Tilt Attack" />
            <h2>Smash Attacks</h2>
            <BasicPairInput item="smashUp" label="Upward Smash Attack" />
            <BasicPairInput item="smashSd" label="Side Smash Attack" />
            <BasicPairInput item="smashDn" label="Downward Smash Attack" />
            <h2>Special Attacks</h2>
            <BasicPairInput item="specNt" label="Neutral Special Attack" />
            <BasicPairInput item="specUp" label="Upward Special Attack" />
            <BasicPairInput item="specSd" label="Side Special Attack" />
            <BasicPairInput item="specDn" label="Downward Special Attack" />
            <h2>Aerial Attacks</h2>
            <BasicPairInput item="airNt" label="Neutral Aerial Attack" />
            <BasicPairInput item="airUp" label="Upward Aerial Attack" />
            <BasicPairInput item="airFw" label="Forward Aerial Attack" />
            <BasicPairInput item="airDn" label="Downward Aerial Attack" />
            <BasicPairInput item="airBk" label="Backward Aerial Attack" />
            <h2>Grabs and Throws</h2>
            <BasicPairInput item="grab" label="Grab" />
            <BasicPairInput item="pummel" label="Pummel (after Grab)" />
            <BasicPairInput item="thrUp" label="Upward Throw (after Grab)" />
            <BasicPairInput item="thrFw" label="Forward Throw (after Grab)" />
            <BasicPairInput item="thrDn" label="Downward Throw (after Grab)" />
            <BasicPairInput item="thrBk" label="Backward Throw (after Grab)" />
            <h2>Taunts</h2>
            <BasicPairInput item="tauntSd" label="Side Taunt" />
            <BasicPairInput item="tauntUp" label="Upward Taunt" />
            <BasicPairInput item="tauntDn" label="Downward Taunt" />




        </>
    )
}



