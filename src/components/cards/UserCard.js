import { useState } from "react";

// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, Card, Grid, Stack, Typography, useMediaQuery } from "@mui/material";

// ==============================|| USER CARD ||============================== //

function UserCard({ userData }) {
    const theme = useTheme();

  const [clicked, setClicked] = useState(false);
  const { company, name, email, address, phone, username, website } = userData;

  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchDownMD = useMediaQuery(theme.breakpoints.down('md'));

  const handleView = () => {
    setClicked((prev) => !prev);
  };

  return (
    <>
      <Grid item xs={12}>
        <Card sx={{ p: 5, borderRadius: "0.75rem", boxShadow: 0 }}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Grid container spacing={ matchDownSM ? 2 : 8} alignItems="center">
                <Grid item xs={12} sm={6} md={2.5}>
                  <Typography variant="caption">{company.name}</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={2.5}>
                  <Stack>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      CONTACT
                    </Typography>
                    <Typography variant="caption">{name}</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={2.5}>
                  <Stack>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      CITY
                    </Typography>
                    <Typography variant="caption">{address.city}</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={2.5}>
                  <Stack>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      EMAIL
                    </Typography>
                    <Typography variant="caption">{email}</Typography>
                  </Stack>
                </Grid>
                <Grid item align={matchDownMD ? 'left' : "right"} xs={12} sm={6} md={2}>
                  <Button
                    variant="contained"
                    color="error"
                    sx={{
                      textTransform: "none",
                      borderRadius: 5,
                      px: 1.5,
                      py: 0.5,
                    }}
                    onClick={handleView}
                  >
                    {clicked ? "Hide Details" : "View Details"}
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            {clicked && (
              <Grid item xs={12}>
                <Card sx={{ p: 3, borderRadius: "0.75rem", boxShadow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Stack spacing={2}>
                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: 600 }}
                        >
                          Description
                        </Typography>
                        <Typography variant="caption">
                          {company.catchPhrase}
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container alignItems="center">
                        <Grid item xs={12} md={4}>
                          <Stack spacing={2}>
                            <Typography
                              variant="subtitle2"
                              sx={{ fontWeight: 600 }}
                            >
                              Contact Person
                            </Typography>
                            <Stack>
                              <Typography variant="caption">{name}</Typography>
                              <Typography
                                variant="subtitle2"
                                sx={{ fontWeight: 600 }}
                              >
                                User
                              </Typography>
                            </Stack>
                            <Stack>
                              <Typography variant="caption">
                                {username}
                              </Typography>
                              <Typography
                                variant="subtitle2"
                                sx={{ fontWeight: 600 }}
                              >
                                Emails
                              </Typography>
                            </Stack>
                            <Stack>
                              <Typography variant="caption">{email}</Typography>
                              <Typography
                                variant="subtitle2"
                                sx={{ fontWeight: 600 }}
                              >
                                Phones
                              </Typography>
                            </Stack>
                            <Typography variant="caption">{phone}</Typography>
                          </Stack>
                        </Grid>
                        <Grid item xs={12} md={8}>
                          <Stack spacing={2}>
                            <Typography
                              variant="subtitle2"
                              sx={{ fontWeight: 600 }}
                            >
                              Address
                            </Typography>
                            <Stack>
                              <Typography variant="caption">{`${address.suite} ${address.street} ${address.city} ${address.zipcode}`}</Typography>
                              <Typography
                                variant="subtitle2"
                                sx={{ fontWeight: 600 }}
                              >
                                City
                              </Typography>
                            </Stack>
                            <Stack>
                              <Typography variant="caption">
                                {address.city}
                              </Typography>
                              <Typography
                                variant="subtitle2"
                                sx={{ fontWeight: 600 }}
                              >
                                Website
                              </Typography>
                            </Stack>
                            <Stack>
                              <Typography variant="caption">{website}</Typography>
                              <Typography
                                variant="subtitle2"
                                sx={{ fontWeight: 600 }}
                              >
                                Company
                              </Typography>
                            </Stack>
                            <Typography variant="caption">{company.name}</Typography>
                          </Stack>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            )}
          </Grid>
        </Card>
      </Grid>
    </>
  );
}

export default UserCard;
