export default function Tabs({ children, buttons , ButtonContainer = 'menu'}) {
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer> {/*Must  be capitalized to work*/}
      {children}
    </>
  );
}
