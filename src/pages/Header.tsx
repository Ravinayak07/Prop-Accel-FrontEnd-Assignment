const Header = () => {
    return(
      <>
      <img className="mb-10" alt="" src="/header-1.svg" />
      <img
        className="absolute top-[550px] left-[975px] w-[460px]"
        alt=""
        src="/header-2.png"
      />
      <div>
        <b className="absolute top-[36px] left-[175px]">Logo</b>
        <div className="absolute top-[36px] left-[898px] flex flex-row gap-[107px]">
          <div>About</div>
          <div>Pricing</div>
          <div>Review</div>
        </div>
      </div>
      </>

    );
}

export default Header;