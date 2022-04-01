import { useState, useRef, useEffect } from "react";

function MyMeasurer(): any {
  const [titleHeight, setTitleHeight] = useState(0);
  const textRef: any = useRef(null);

  useEffect(() => {
    setTitleHeight(textRef.current.clientHeight);
  }, [window]);

  return (
    <>
      <p ref={textRef}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus et metus maximus convallis. Donec in orci neque. Donec pulvinar leo sapien, id
        molestie lacus rhoncus eu. Nunc nunc nisi, aliquam sit amet risus ut, consequat ullamcorper erat. Donec molestie rhoncus nisl. Sed tempus justo sit amet
        dui lacinia sollicitudin. Duis eget sem porttitor, dictum velit a, tempor mi. Donec ornare facilisis nisi id eleifend. Etiam bibendum, enim sit amet
        sagittis maximus, eros quam porta ligula, nec tincidunt mi massa id nibh. Fusce ut porta quam. Phasellus sed nunc neque. In hac habitasse platea
        dictumst. Praesent accumsan pulvinar sapien, vitae venenatis odio vehicula sed. Pellentesque luctus dolor posuere diam consectetur sodales. Vestibulum
        eu odio nec dolor facilisis vestibulum. Sed tincidunt eros non tellus congue sollicitudin. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Vestibulum nec ex eget augue rutrum tempor non ut elit. Mauris aliquet nisi quis neque mattis congue. Aenean dignissim
        vestibulum eleifend. Proin odio purus, hendrerit id iaculis et, eleifend non nulla. Vivamus non placerat est. Donec sit amet quam placerat nibh congue
        venenatis. Vivamus eu nulla massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas dolor non arcu iaculis porttitor in a
        felis. Ut eleifend augue in elit accumsan, quis convallis augue iaculis. Etiam a sem non justo vehicula rhoncus. Proin placerat eros at sem luctus, non
        posuere leo porttitor. Ut aliquet massa sed sagittis varius. Nulla id consectetur velit. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Donec vel porttitor augue, eget dictum sem. Proin ut metus et dui rhoncus fermentum a ut est. Fusce interdum pharetra
        eros, id blandit sem rutrum non. Ut dignissim libero tellus, eget facilisis odio vestibulum ac. Fusce placerat leo at augue dictum pharetra. Praesent
        molestie mattis turpis, in facilisis est molestie nec. Duis fringilla porttitor nunc, vel finibus leo lacinia vitae. Integer porta erat neque, a feugiat
        nunc tincidunt vitae. Pellentesque pulvinar at tortor vel luctus. Aenean ultricies ex quam, sit amet dignissim arcu dictum non. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas porttitor ligula turpis. Vestibulum id congue arcu. Sed lacinia
        fermentum pharetra. Pellentesque id vehicula nulla. Donec eu nibh est. Quisque mattis turpis vitae turpis vehicula, eget facilisis nisi molestie. Fusce
        vehicula dapibus tincidunt. Integer volutpat blandit ex vitae tincidunt. Vivamus scelerisque, risus eget vulputate dictum, ante turpis molestie enim,
        eget dignissim tellus mi ac elit. Phasellus rhoncus dolor quis nisi mattis, eu porttitor diam lacinia. Maecenas convallis, dui quis elementum suscipit,
        erat justo scelerisque sapien, sed viverra libero sapien eget ligula. Vestibulum nec vestibulum diam. Aliquam placerat massa vel ligula suscipit, in
        blandit ante mollis. Duis consequat leo a ipsum elementum, in bibendum nisl blandit. Praesent pulvinar mi libero, vel maximus libero vestibulum a.
        Aenean nec magna ligula. Vestibulum vitae lorem vulputate, varius risus in, fringilla neque. Donec tincidunt venenatis ornare. Nulla eget mattis ligula.
        Etiam mattis, sem vitae congue gravida, nibh mi ornare nulla, quis elementum lorem lorem in sem. Proin dignissim vel tellus vitae interdum. Vestibulum a
        euismod felis. Morbi a leo tortor. Duis in placerat purus. Vivamus eu augue quam. Duis vel rhoncus mi. Maecenas blandit pretium elit nec porttitor.
        Vestibulum efficitur convallis nisi quis vulputate. Sed eu nulla at quam tincidunt vestibulum at id purus. Nulla facilisi. Morbi eleifend odio nunc, ac
        suscipit libero suscipit sed. Fusce pharetra augue quis placerat hendrerit. Maecenas egestas consectetur quam non sagittis. Pellentesque nisl risus,
        interdum non imperdiet ac, bibendum et augue. Cras euismod, arcu et dignissim faucibus, diam tortor consectetur elit, sed varius eros eros gravida
        nulla. Vivamus at ornare tortor, sed tincidunt augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Maecenas laoreet gravida diam, non ultricies velit viverra non. Praesent et urna imperdiet, tempus metus ut, dictum ligula. Maecenas eget elementum ex.
        Donec accumsan lorem consequat ligula feugiat sodales at eget mi. Integer at urna lacus. Sed eu blandit mi, id placerat tellus. Phasellus ac neque
        sapien. Sed id leo tincidunt, lacinia libero a, efficitur tellus. Nulla porta quam et mattis congue. Aenean dui mi, maximus in interdum nec, interdum
        vitae purus. Vestibulum iaculis a libero ut fermentum. Etiam consequat ipsum sagittis, eleifend enim in, sodales arcu. Nullam egestas luctus ante, nec
        viverra elit posuere at. Aliquam eu aliquam erat. Curabitur vel bibendum turpis. Nunc enim odio, dictum id ex in, volutpat dictum felis. Donec ultrices
        dolor neque, ut faucibus tellus sollicitudin ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam aliquet
        risus at tempor tincidunt. Pellentesque mollis ligula vel rutrum condimentum. Sed nunc erat, accumsan aliquet rhoncus quis, hendrerit sagittis nisi.
        Quisque et nisi vestibulum, malesuada est eu, laoreet quam. Vestibulum sed quam quis ipsum fermentum interdum. Duis ut nibh urna. Donec tincidunt risus
        venenatis ex finibus dapibus. In imperdiet diam lacus, sed ultricies arcu semper vitae. Aliquam blandit velit vel ipsum finibus, sit amet porta tellus
        cursus. Praesent sit amet elementum justo. Vestibulum in urna consectetur augue laoreet aliquam. Aliquam egestas elit purus, in euismod felis tristique
        imperdiet. Phasellus eget dolor dui. Nunc pharetra risus risus, non mattis mauris scelerisque sit amet. Donec cursus vel dui nec hendrerit. Nunc sit
        amet felis pharetra lacus consequat venenatis. Nunc molestie est a pulvinar mollis. Vestibulum vitae nunc ac velit hendrerit convallis. Mauris ac
        lobortis est. Donec auctor, sapien non interdum consectetur, mi tortor venenatis risus, ut pellentesque ligula mi quis diam. In velit diam, viverra sit
        amet dui quis, fermentum malesuada enim. Sed nec volutpat mauris, nec fringilla tortor. Sed eget ipsum eu enim gravida eleifend id eget urna. Proin in
        eros vitae diam interdum ultrices. Maecenas sed sodales purus. Sed id sapien mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam
        nisi efficitur, congue sapien et, mattis sapien. In porta vitae urna non commodo. Cras vel neque efficitur, dictum leo non, elementum augue. Proin
        ornare mattis interdum. Suspendisse scelerisque pretium mattis. Mauris rhoncus, massa ut suscipit tristique, metus odio venenatis elit, et.
      </p>
      <p>{titleHeight}</p>
    </>
  );
}

function HomePage() {
  return (
    <>
      <h1>Welcome to the homepage</h1>
      <MyMeasurer />
    </>
  );
}

export default HomePage;
