# curl "http://httpbin.org/post" \
#   --include \
#   --request POST \
#   --header "Content-Type: application/json" \
#   --data "{
#     \"credentials\": {
#       \"email\": \"${EMAIL}\",
#       \"password\": \"${PASSWORD}\",
#       \"password_confirmation\": \"${PASSWORD}\"
#     }
#   }"
#
# # data output from curl doesn't have a trailing newline
# echo


# Curl command to Sign Up - POST
