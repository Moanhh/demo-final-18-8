import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  CardSubtitle,
  ListGroupItem,
  Button,
} from "reactstrap";

const FeedData = [

  {
    title: "Why do we fall ill ?",
    icon: "bi bi-question-circle",
    color: "success",
    date: "6 minute ago",
  },
  {
    title: "what is duck's favorite snack ?",
    icon: "bi bi-bag-check",
    color: "light",
    date: "6 days ago",
  },
  {
    title: "what is duck cloth ?",
    icon: "bi bi-bell",
    color: "dark",
    date: "6 months ago",
  },
  {
    title: "Where is my duck ?",
    icon: "bi bi-hdd",
    color: "warning",
    date: "6 years ago",
  },
];

const Feeds = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Recently answered questions</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Widget you can use
        </CardSubtitle>
        <ListGroup flush className="mt-4">
          {FeedData.map((feed, index) => (
            <ListGroupItem
              key={index}
              action
              href="/"
              tag="a"
              className="d-flex align-items-center p-3 border-0"
            >
              <Button
                className="rounded-circle me-3"
                size="sm"
                color={feed.color}
              >
                <i className={feed.icon}></i>
              </Button>
              {feed.title}
              <small className="ms-auto text-muted text-small">
                {feed.date}
              </small>
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default Feeds;
