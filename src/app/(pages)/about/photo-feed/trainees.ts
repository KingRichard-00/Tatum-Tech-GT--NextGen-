import { StaticImageData } from "next/image";
import Brian from "./photos/Brian Ikeogu.jpg";
import Edim from "./photos/Edim John Paul.jpg";
import Mano from "./photos/Eziomano Agelebe.jpg";
import Fathiat from "./photos/Fathiat Odutayo.jpg";
import Francis from "./photos/Francis Egbuleze.png";
import Israel from "./photos/Israel Ekundayo.jpg";
import Kamal from "./photos/Kamaldeen Busari.jpg";
import Lukman from "./photos/Lukman Ayanwola.jpg";
import Naimot from "./photos/Naheemot Babatunde.jpg";
import Doyin from "./photos/Oladoyin Daniel.jpg";
import Peter from "./photos/Peter Gbagbeke.jpg";
import Richard from "./photos/Richard Ademijube.png";
import Timi from "./photos/Timilehin Aguda.jpg";
import Vicky from "./photos/Victoria Ebong.jpg";
import Toheeb from "./photos/Toheeb Adebayo.jpg";

export type TraineeImage = {
  id: string;
  name: string;
  src: StaticImageData;
  Description: string;
};

const traineesImages: TraineeImage[] = [
  {
    id: "1",
    name: "Brian Ikeogu",
    src: Brian,
    Description:
      "Brian is an intelligent, soft-spoken guy who carries himself with poise. He may seem quiet, but when he does speak up, his contributions are thoughtful, polite, and well worth listening",
  },
  {
    id: "2",
    name: "Edim John Paul",
    src: Edim,
    Description:
      "Self-styled “Edim the GOAT,” Edim is a dogged, focused guy who may seem to value his personal space but knows how to engage when it counts. He has a knack for striking up conversations with complete strangers, which makes friendships come easily to him",
  },
  {
    id: "3",
    name: "Eziomano Agelebe",
    src: Mano,
    Description:
      "Mano is that guy who is equally skilled in listening as he is in talking, though he is mostly blunt and direct with his speeches and is most certainly capable of hurting the emotions of some. He is the kind of guy who you may not expect to be up there but will eventually make his way through. Mano has a knack for saying some 'hard truths'",
  },
  {
    id: "4",
    name: "Fathiat Odutayo",
    src: Fathiat,
    Description:
      "Hmmm!!! Indeed, the Queen of her King, Fathiat is the 'resident Gen Z-er' and the fresh face of the group. Beautiful, smart and feisty, she is a lady whose fast-paced growth over the years has brought her exactly where she stands today. Human words are too weak to adequately capture the grandeur of the charm that surrounds her",
  },
  {
    id: "5",
    name: "Francis Egbuleze",
    src: Francis,
    Description:
      "Jokingly nicknamed 'Lizzy' by Vicky, Francis who prefers to be aliased 'Chocboy' is one of the most approachable guys in the group. Although playful at different occasions, he certainly knows how to put in the effort that gets the job done",
  },
  {
    id: "6",
    name: "Israel Ekundayo",
    src: Israel,
    Description:
      "Israel is an outgoing guy who knows how to engage almost anyone in any conversation. Pretty good at what he does, Israel is one of the brightest minds in the group. He can also be playful when needs be",
  },
  {
    id: "7",
    name: "Kamaldeen Busari",
    src: Kamal,
    Description:
      "'The main guy' and 001 for a reason. Kamal is the self-confident guy with a distinctive diction and intonation that can make any girl fall head over heels. There is a certain flair that can easily be observed in the way he does things that makes him stand out.",
  },
  {
    id: "8",
    name: "Lukman Ayanwola",
    src: Lukman,
    Description:
      "Nicknamed 'man from Sudan,' Lukman is a simple guys who you can almost never find being at loggerheads with anyone. He is always ready to help whenever called upon to handle certain tasks. Lukman became the 'unique one' in the midst of the group, as only he did not get placed within the software engineering team, but it's beautiful to observe that he is enjoying every bit of his work with utmost fulfillment",
  },
  {
    id: "9",
    name: "Naheemot Babatunde",
    src: Naimot,
    Description:
      "Naimot is that lady who is never scared to speak her mind and give her opinion during conversations. She is also one of the most likely to ask a question when the rest of the group probably have same exact question at heart with no one wanting to bell the cat. Her knowledge about things in general cuts across divers aspects, helping her to be involved in almost every conversation",
  },
  {
    id: "10",
    name: "Oladoyin Daniel",
    src: Doyin,
    Description:
      "Perhaps the “elder figure” of the group, Doyin is never afraid to stand by his opinions and convictions, no matter what everyone else is doing. He can be blunt at times, but only because he believes in saying things as they are",
  },
  {
    id: "11",
    name: "Peter Gbagbeke",
    src: Peter,
    Description:
      "Nicknamed AI for his famed usage of the technology. Peter is a that free-spirited guy who is adept at switching modes between utmost seriousness when facing the heat of the job and stirring up a bit of mischief when he considers it playtime",
  },
  {
    id: "12",
    name: "Richard Ademijube",
    src: Richard,
    Description:
      "Richard is that guy you can catch at every moment smiling (even when there are no obvious reasons). He may seem to be quiet in most conversations, but trust me he listens with apt attention with understanding that is rivalled by not too many. He is also the 'silent troublemaker of the group' and the King of 'you know who'",
  },
  {
    id: "13",
    name: "Timilehin Aguda",
    src: Timi,
    Description:
      "Timilehin is that guy with laughter that makes everyone turns back and ask 'Who on earth laughs in this kind of outlandish manner.' On the surface, he may seem to be all jokes and play, but trust me Timi is a great guy that oozes bits of wisdom here and there when his voice needs to be heard",
  },
  {
    id: "14",
    name: "Victoria Ebong",
    src: Vicky,
    Description:
      "If there is a mother-figure among the trainees, one that is always ready to let her voice be heard on behalf of the rest, then that is Victoria. Just like a typical mother, she might appear strict and firm at times, but trust me, deep down there she is tender at heart and truly caring",
  },
  {
    id: "15",
    name: "Toheeb Adebayo",
    src: Toheeb,
    Description:
      "Toheeb is an easy going fellow, famed for being the lone man in the UI/UX team. He has a calm nature that at times needs some gentle tugging to be called into action. Toheeb attends to his duties with concentration and diligence that many can't match",
  },
];

export default traineesImages;
