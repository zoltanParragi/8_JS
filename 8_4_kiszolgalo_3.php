<?php


print_r(json_encode($_POST));
//print_r(json_encode($_FILES["profile_img"]["name"]));

move_uploaded_file($_FILES["profile_img"]["tmp_name"], "uploads/".$_FILES["profile_img"]["name"]);
