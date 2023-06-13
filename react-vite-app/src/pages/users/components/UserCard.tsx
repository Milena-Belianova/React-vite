import { Card, Stack, Image } from 'react-bootstrap';
import { User } from '../../../redux/slices/usersSlice';

type UserCardParams = {
  user: User | null;
};

export const UserCard = ({ user }: UserCardParams) => {
  return (
    <Card
      style={{ minWidth: '19rem' }}
      className="flex-grow-1 flex-column bg-light"
    >
      <Card.Header className="d-flex align-items-center justify-content-center">
        <div className="d-flex p-3 align-items-center justify-content-center">
          <Image
            src="src/assets/user-avatar.png"
            style={{ maxWidth: '7rem', maxHeight: '7rem' }}
            className="img-thumbnail"
            alt="user avatar"
            roundedCircle
          />
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <Card.Title className="text-center">{user?.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            @{user?.username}
          </Card.Subtitle>
        </div>
      </Card.Header>

      <Stack
        direction="horizontal"
        className="flex-wrap user-card__info-stack"
        style={{ alignItems: 'start' }}
      >
        <Card.Body style={{ height: '100%' }}>
          <Card.Title>
            <i>Контакты</i>
          </Card.Title>
          <Stack gap={2}>
            <span>
              <b>Почта:</b> {user?.email}
            </span>
            <span>
              <b>Телефон:</b> {user?.phone}
            </span>
            <span>
              <b>Сайт:</b> {user?.website}
            </span>
          </Stack>
        </Card.Body>
        <div className="vr user-card__divider" />
        <Card.Body>
          <Card.Title>
            <i>Адрес</i>
          </Card.Title>

          <Stack gap={2}>
            <span>
              <b>Улица:</b> {user?.address.street}
            </span>
            <span>
              <b>Апартамент:</b> {user?.address.suite}
            </span>
            <span>
              <b>Город:</b> {user?.address.city}
            </span>
            <span>
              <b>Код:</b> {user?.address.zipcode}
            </span>
          </Stack>
        </Card.Body>
        <div className="vr user-card__divider" />
        <Card.Body>
          <Card.Title>
            <i>Организация</i>
          </Card.Title>

          <Stack gap={2}>
            <span>
              <b>Название:</b> {user?.company.name}
            </span>
            <span>
              <b>Об организации:</b> {user?.company.catchPhrase}
            </span>
            <span>
              <b>Политика:</b> {user?.company.bs}
            </span>
          </Stack>
        </Card.Body>
      </Stack>
    </Card>
  );
};
