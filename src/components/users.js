import { useEffect, useState } from "react";

// material-ui
import { Grid, Pagination, Typography } from "@mui/material";

// project import
import { dispatch, useSelector } from "../store";
import { getUsers } from "../store/reducers/user";
import usePagination from "../hooks/usePagination";
import UserCard from "./cards/UserCard";

// ==============================|| USERS PAGE ||============================== //

function Users() {
  const { users } = useSelector((state) => state.user);

  let [page, setPage] = useState(1);
  const PER_PAGE = 3;
  const count = Math.ceil(users.length / PER_PAGE);
  const _DATA = usePagination(users, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  useEffect(() => {
    dispatch(getUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let usersResult = <></>;

  if (users && users.length > 0) {
    usersResult = _DATA.currentData().map((user) => (
      <Grid item xs={12} key={user.id}>
        <UserCard userData={user} />
      </Grid>
    ));
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align="center" variant="h4" sx={{ fontWeight: 800 }}>
          Users List
        </Typography>
      </Grid>

      {/* users data */}
      {usersResult}

      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          count={count}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
          sx={{
            width: "max-content",
            "& .Mui-selected": {
              bgcolor: "red",
              "&:hover": {
                bgcolor: "red",
              },
            },
          }}
        />
      </Grid>
    </Grid>
  );
}

export default Users;
