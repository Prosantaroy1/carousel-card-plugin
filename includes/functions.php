<?php 

function ccdIsPremium() {
    return CCD_HAS_PRO ? ccd_fs()->can_use_premium_code() : false;
}