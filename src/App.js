import "./index.css";
import PackingList from "./components/PackagingList";
import Status from "./components/Status";
import Form from "./components/Form";
import Logo from "./components/Logo";
import Items from "./components/item";
export default function app() {
  return (
    <div>
      <Logo />
      <Form />
      <PackingList />
      <Items />
      <Status />
    </div>
  );
}
