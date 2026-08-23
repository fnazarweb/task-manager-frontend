// import { useState } from "react";
import ListComponent from "./List/ListComponent";
// import ListClassComponent from "./ListClassComponent";
// import EffectComponent from "./EffectComponent";
// import LayoutEffectComponent from "./LayoutEffectComponent";
// import StateComponent from "./StateComponent";
// import ReducerComponent from "./ReducerComponent";
// import RefComponent from "./RefComponent";
// import MemoComponent from "./MemoComponent";
// import ReactMemoComponent from "./ReactMemoComponent";
// import WidthComponent from "./WidthComponent";
// import ReactFormComponent from "./ReactFormComponent";

// import { addContact, getContactsList } from "./api/api";

// import { useEffect, useState } from "react";
import "./App.css";
// import { useFetch } from "./hooks/useFetch";
// import axios from "axios";
// import { useMutation, useQuery } from "react-query";

function App() {
  // const [data, setData] = useState([]);
  // const [isPostLoading, setIsPostLoading] = useState(false);

  // const { data: contacts, isLoading, error } = useFetch("contacts");

  // useEffect(() => {
  //   setData(contacts);
  // }, [contacts]);

  // const addContact = async () => {
  //   setIsPostLoading(true);
  //   const payload = {
  //     name: "Nazar",
  //     lastName: "Filipchuk",
  //     about: "Lorem ipsum dolor sit amet, consectetur adip",
  //   };
  //   const response = await axios.post("contacts", payload);
  //   setData((prev) => [...prev, response.data]);
  //   setIsPostLoading(false);
  // };

  // const deleteContact = async (id) => {
  //   await axios.delete(`contacts/${id}`);
  //   setData((prev) => prev.filter((contact) => contact.id !== id));
  // };
  // const editContact = async (id) => {
  //   const payload = {
  //     name: "Sasha",
  //     lastName: "Someone",
  //     about: "Lorem ipsum dolor sit amet, consectetur adip",
  //   };
  //   const response = await axios.put(`contacts/${id}`, payload);

  //   setData((prev) =>
  //     prev.map((contact) => {
  //       if (contact.id === id) {
  //         return response.data;
  //       }
  //       return contact;
  //     }),
  //   );
  // };

  // if (error) {
  //   return <div>Something went wrong {error}</div>;
  // }

  // const { data, isFetching } = useQuery({
  //   queryKey: ["contactsList"],
  //   queryFn: getContactsList,
  // });

  // const { mutateAsync } = useMutation({
  //   mutationFn: (payload) => addContact(payload),
  // });

  // const addNewContact = async () => {
  //   const payload = {
  //     name: "Nazar",
  //     lastName: "Filipchuk",
  //     about: "Lorem ipsum dolor sit amet, consectetur adip",
  //   };
  //   try {
  //     await mutateAsync(payload);
  //   } catch (error) {}
  // };

  return (
    <div className="App">
      <header className="App-header">
        {/* <ReactFormComponent /> */}
        {/* <h1>Contacts</h1> */}
        <ListComponent />
      </header>
      <main>
        {/* <ul>
          {isFetching ? (
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#4fa94d"
              ariaLabel="three-dots-loading"
              wrapperStyle={{ margin: "20px" }}
              wrapperClass="custom-loader"
            />
          ) : (
            data?.map((contact) => (
              <li key={contact.id}>
                <p>
                  {contact.name} {contact.lastName}
                </p>
                <button>Delete</button>
                <button>Edit</button>
              </li>
            ))
          )}
        </ul>
        <button onClick={addNewContact}>add</button> */}
      </main>
    </div>
  );
}

export default App;
