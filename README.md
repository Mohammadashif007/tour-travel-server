# tour-travel-server

user
tour
review

user{
    name
    email
    age
    photo
    role-> user, admin
    status-> active, inactive
}

tour{
    name
    rating
    duration
    price
    coverImage
    image[]
    startDate
    tourLocation
}

review {
    review
    rating
    tour-> ref
    user-> ref
}