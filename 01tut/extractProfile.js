import { getImageUrl } from "./utils.js";

const persons = [
  {
    name: "Maria Skłodowska-Curie",
    professions: ["physicist", "chemist"],
    awards: [
      "Nobel Prize in Physics",
      "Nobel Prize in Chemistry",
      "Davy Medal",
      "Matteucci Medal",
    ],
    discovered: "polonium (element)",
    imageUri: "szV5sdG",
    imageSize: 70,
  },
  {
    name: "Katsuko Saruhashi",
    professions: ["geochemist"],
    awards: ["Miyake Prize for geochemistry", "Tanaka Prize"],
    discovered: "a method for measuring carbon dioxide in seawater",
    imageUri: "YfeOqp2",
    imageSize: 70,
  },
];

export function Profile({ person }) {
  return (
    <section className="profile">
      <h2>{person.name}</h2>
      <img
        className="avatar"
        src={getImageUrl(person.imageUri)}
        alt={person.name}
        width={person.imageSize}
        height={person.imageSize}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {person.professions.join(" and ")}
        </li>
        <li>
          <b>Awards: {person.awards.length} </b>({person.awards.join(", ")})
        </li>
        <li>
          <b>Discovered: </b>
          {person.discovered}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile person={persons[0]}/>
      <Profile person={persons[1]}/>
    </div>
  );
}
