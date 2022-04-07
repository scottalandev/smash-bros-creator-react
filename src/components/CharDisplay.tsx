import "./charDisplay.css";

export function CharDisplay({ char }) {
  return (
    <>
      <h1>Character: {char.name}</h1>
      <h3>General Info</h3>
      <table className="gen-info-table">
        <tbody>
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
            <td>{char.wallJump === true ? "Yes" : "No"}</td>
          </tr>
        </tbody>
      </table>

      <h3>Neutral (Jab) Attack</h3>
      <h6>Neutral/Jab attacks are weak, basic attacks performed by pressing A.</h6>
      <table>
        <tbody>
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
        </tbody>
      </table>

      <h3>Dash Attack</h3>
      <h6>Dash attacks are performed by pressing A while sprinting.</h6>
      <table>
        <tbody>
        <tr className="ul">
          <th>Name</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>{char.dash.name}</td>
          <td>{char.dash.desc}</td>
        </tr>
        </tbody>
      </table>

      <h3>Tilt Attacks</h3>
      <h6>
        Tilt attacks are performed by combining directional input and A. Pressing a direction and A <em>at the same time</em>, however produces a{" "}
        <em>SMASH ATTACK</em>. One surefire way to produce a tilt attack is to lean the Control Stick halfway in the intended direction.
      </h6>
      <table>
        <tbody>
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
        </tbody>
      </table>

      <h3>Smash Attacks</h3>
      <h6>
        Smash Attacks are performed by quickly moving the control stick in a direction and pressing A at the same moment. They are alternatively (and more
        reliably) produced by simply using the right control stick. Most smash attacks can be charged by holding A (or right stick).
      </h6>
      <table>
        <tbody>
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
        </tbody>
      </table>

      <h3>Special Attacks</h3>
      <h6>
        Special Attacks are performed by pressing B combined with the appropriate direction (no directional input for a Neutral Special). Some can be charged or
        have variations based on duration of button press.
      </h6>
      <table>
        <tbody>
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
        </tbody>
      </table>

      <h3>Aerial Attacks</h3>
      <h6>Aerial Attacks are performed by combining A with a direction (or no directiof for a Neutral Aerial) while in the air.</h6>
      <table>
        <tbody>
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
        </tbody>
      </table>

      <h3>Grabs and Throws</h3>
      <h6>
        Grabs are performed by pressing L when your opponent is close in front of your character. Pummels are performed by pressing A while holding a grabbed
        opponent, and throws are performed with the Control Stick after a grab.
      </h6>
      <table>
        <tbody>
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
        </tbody>
      </table>

      <h3>Taunts</h3>
      <h6>
        Taunts are performed by using the D-Pad buttons (yellow buttons below main control stick). If playing with one joy-con, taunts can alternately be
        performed by clicking the Control Stick inwards (as a button press) and pressing one of the four main buttons.
      </h6>
      <table>
        <tbody>
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
        </tbody>
      </table>
      <h3>Final Smash</h3>
      <h6>
        The Final Smash is your Character's ultimate attack, and is only accessible after charging up the 'Final Smash Meter', or by activating your Final Smash
        via an item or other method. Final Smash's are performed like a Neutral Special--pressing B with no directional input. Be advised that: you cannot
        perform a Neutral Special while your Final Smash is charged, the availability of your Final Smash is time-limited.
      </h6>
      <table>
        <tbody>
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
        </tbody>
      </table>
    </>
  );
}
