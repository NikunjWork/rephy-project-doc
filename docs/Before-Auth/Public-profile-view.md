!!! info "Provider profile view"

    The Provider Profile View offers users a comprehensive look at a provider's qualifications and services. Here, you can find essential information including the provider's bio, expertise, and areas of specialization.

![Image title](/assets/site-images/before-auth/public-profile-view/1.jpeg)

## Endorser

!!! info "Provider endorser (reviews get)"

    Users can also view ratings and reviews from past clients, ensuring informed decisions. After user login or register they can see all details in profile.

![Image title](/assets/site-images/before-auth/public-profile-view/2.jpeg)

## Sign up modal

!!! info "Limited view"

    Before login or register user can see limited provider profile details.

    ??? code

        ``` js
            const [modalShow, setModalShow] = useState(false);

            const [scrollValue, setScrollValue] = useState(0);

            const onScroll = () => {
                const onScrollDesktop =
                document.getElementById("onScrollDesktop").scrollTop;
                const onScrollMobile = document.getElementById("onScrollMobile").scrollTop;

                const scrollTop = onScrollDesktop ? onScrollDesktop : onScrollMobile;

                setScrollValue(scrollTop);
            };

            useEffect(() => {
                if (scrollValue >= 600) {
                setModalShow(true);
                }
            }, [scrollValue]);
        ```

![Image title](/assets/site-images/before-auth/public-profile-view/3.jpeg)