const [findFriends, setFindFriends] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState(false);

  useEffect(() => {
    getFriendData();
  }, []);

//getting all data.
  const getFriendData = () => {
    setLoadingStatus(true);
    Api.get('findfriends', {
      userid: userData.auth.userid,
      limit: "all",
    }).then(res => {
      if (res) {
        setLoadingStatus(false);
        let arr = [...res.users];
        arr.map(item => {
          item.add_frend_status = false;
        });
        setFindFriends(arr);
      }
    });
  };

//change the color after click any button call the function .
  const addPeopleAction = id => () => {
    Api.get('friend/add', { userid: userData.auth.userid, to_userid: id }).then(
      res => {
        if (res.status) {
          let arr = [...findFriends];
          arr.map(item => {
            if (item.id == id) {
              item.add_frend_status = !item.add_frend_status;
            }
          });
          setFindFriends(arr);
        }
      },
    );
  };
