import Link from "next/link";
import styles from "../page.module.css";
const Footer = () => {
    return (
        <div className={`${styles.footer}`}>
          <p>Copyright © 2024 TTN Blog Website. All rights reserved. No part of this website may be reproduced, distributed, or transmitted in any form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior written permission of the website owner, except in the case of brief quotations embodied in critical reviews and certain other noncommercial uses permitted by copyright law. For permission requests, contact the website owner.</p>
        </div>
    )
}

export default Footer;