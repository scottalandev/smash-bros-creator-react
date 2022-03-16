import './charDisplay.css';

export function CharDisplay({ char }) {
    return (
        <>
            <h1>Character: {char.name}</h1>
            <h3>General Info</h3>
                <table className="gen-info-table">
                    <tr>
                        <th>Catchphrase: </th>
                        <td>{char.phrase}</td>
                    </tr>
                    <tr>
                        <th>Number of Jumps (2-6): </th>
                        <td>{char.jumps}</td>
                    </tr>
                    <tr>
                        <th>Weight (62-135): </th>
                        <td>{char.weight}</td>
                    </tr>
                    <tr>
                        <th>Special Perk: </th>
                        <td>{char.specPerk}</td>
                    </tr>
                    <tr>
                        <th>Wall Jump: </th>
                        <td>{(char.wallJump == true)? 'Yes' : 'No'}</td>
                    </tr>

                </table>
            
            <h3>Neutral (Jab) Attack</h3>
                <table>
                    <tr className="ul">
                        <th>Name</th>
                        <th># of Stages</th>
                        <th>End Type</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td>{char.jab.name}</td>
                        <td>{char.jab.stages}</td>
                        <td>{char.jab.endType}</td>
                        <td>{char.jab.desc}</td>
                    </tr>
                </table>
            
            <h3>Dash Attack</h3>
                <table>
                    <tr className="ul">
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td>{char.dash.name}</td>
                        <td>{char.dash.desc}</td>
                    </tr>
                </table>
            
            <h3>Tilt Attacks</h3>
                <table>
                    <tr className="ul">
                        <th>Move Type</th>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <th>Up Tilt</th>
                        <td>{char.tiltUp.name}</td>
                        <td>{char.tiltUp.desc}</td>
                    </tr>
                    <tr>
                        <th>Side Tilt</th>
                        <td>{char.tiltSd.name}</td>
                        <td>{char.tiltSd.desc}</td>
                    </tr>
                    <tr>
                        <th>Down Tilt</th>
                        <td>{char.tiltDn.name}</td>
                        <td>{char.tiltDn.desc}</td>
                    </tr>
                </table>
            
            <h3>Smash Attacks</h3>
                <table>
                    <tr className="ul">
                        <th>Move Type</th>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <th>Up Smash</th>
                        <td>{char.smashUp.name}</td>
                        <td>{char.smashUp.desc}</td>
                    </tr>
                    <tr>
                        <th>Side Smash</th>
                        <td>{char.smashSd.name}</td>
                        <td>{char.smashSd.desc}</td>
                    </tr>
                    <tr>
                        <th>Down Smash</th>
                        <td>{char.smashDn.name}</td>
                        <td>{char.smashDn.desc}</td>
                    </tr>
                </table>
            
            <h3>Special Attacks</h3>
                <table>
                    <tr className="ul">
                        <th>Move Type</th>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <th>Neutral Special</th>
                        <td>{char.specNt.name}</td>
                        <td>{char.specNt.desc}</td>
                    </tr>
                    <tr>
                        <th>Up Special</th>
                        <td>{char.specUp.name}</td>
                        <td>{char.specUp.desc}</td>
                    </tr>
                    <tr>
                        <th>Side Special</th>
                        <td>{char.specSd.name}</td>
                        <td>{char.specSd.desc}</td>
                    </tr>
                    <tr>
                        <th>Down Special</th>
                        <td>{char.specDn.name}</td>
                        <td>{char.specDn.desc}</td>
                    </tr>
                </table>
            
            <h3>Aerial Attacks</h3>
                <table>
                    <tr className="ul">
                        <th>Move Type</th>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <th>Neutral Aerial</th>
                        <td>{char.airNt.name}</td>
                        <td>{char.airNt.desc}</td>
                    </tr>
                    <tr>
                        <th>Up Aerial</th>
                        <td>{char.airUp.name}</td>
                        <td>{char.airUp.desc}</td>
                    </tr>
                    <tr>
                        <th>Forward Aerial</th>
                        <td>{char.airFw.name}</td>
                        <td>{char.airFw.desc}</td>
                    </tr>
                    <tr>
                        <th>Down Aerial</th>
                        <td>{char.airDn.name}</td>
                        <td>{char.airDn.desc}</td>
                    </tr>
                    <tr>
                        <th>Back Aerial</th>
                        <td>{char.airBk.name}</td>
                        <td>{char.airBk.desc}</td>
                    </tr>
                </table>
               
            <h3>Grabs and Throws</h3>
                <table>
                    <tr className="ul">
                        <th>Move Type</th>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <th>Grab</th>
                        <td>{char.grab.name}</td>
                        <td>{char.grab.desc}</td>
                    </tr>
                    <tr>
                        <th>Pummel</th>
                        <td>{char.pummel.name}</td>
                        <td>{char.pummel.desc}</td>
                    </tr>
                    <tr>
                        <th>Up Throw</th>
                        <td>{char.thrUp.name}</td>
                        <td>{char.thrUp.desc}</td>
                    </tr>
                    <tr>
                        <th>Forward Throw</th>
                        <td>{char.thrFw.name}</td>
                        <td>{char.thrFw.desc}</td>
                    </tr>
                    <tr>
                        <th>Down Throw</th>
                        <td>{char.thrDn.name}</td>
                        <td>{char.thrDn.desc}</td>
                    </tr>
                    <tr>
                        <th>Back Throw</th>
                        <td>{char.thrBk.name}</td>
                        <td>{char.thrBk.desc}</td>
                    </tr>
                </table>
            
            <h3>Taunts</h3>
                <table>
                    <tr className="ul">
                        <th>Move Type</th>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <th>Side Taunt</th>
                        <td>{char.tauntSd.name}</td>
                        <td>{char.tauntSd.desc}</td>
                    </tr>
                    <tr>
                        <th>Up Taunt</th>
                        <td>{char.tauntUp.name}</td>
                        <td>{char.tauntUp.desc}</td>
                    </tr>
                    <tr>
                        <th>Down Taunt</th>
                        <td>{char.tauntDn.name}</td>
                        <td>{char.tauntDn.desc}</td>
                    </tr>
                </table>
            <h3>Final Smash</h3>
                <table>
                    <tr>
                        <th>Name</th>
                        <td>{char.finalSmash.name}</td>
                    </tr>
                    <tr>
                        <th>Targeting</th>
                        <td>{char.finalSmash.targetStyle}</td>
                    </tr>
                    <tr>
                        <th>Description</th>
                        <td>{char.finalSmash.desc}</td>
                    </tr>
                </table>
        </>
    )
}