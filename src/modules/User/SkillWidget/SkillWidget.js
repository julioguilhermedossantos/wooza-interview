import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./skillWidget.module.css";
import {
  FaReact,
  FaJs,
  FaPhp,
  FaVuejs,
  FaAngular,
  FaJava,
  FaNodeJs
} from "react-icons/fa";
import { GiPistolGun, GiTrenchKnife, GiWinchesterRifle } from "react-icons/gi";
const skillsList = [
  {
    id: "JS",
    icon: <FaJs className={styles.skillIcon} color="#7f8c8d" />,
    iconBestSkill: (
      <FaJs className={styles.skillIcon} size={42} color="#e67e22" />
    )
  },
  {
    id: "React",
    icon: <FaReact className={styles.skillIcon} color="#7f8c8d" />,
    iconBestSkill: (
      <FaReact className={styles.skillIcon} size={42} color="#e67e22" />
    )
  },
  {
    id: "NodeJS",
    icon: <FaNodeJs className={styles.skillIcon} color="#7f8c8d" />,
    iconBestSkill: (
      <FaNodeJs className={styles.skillIcon} size={42} color="#e67e22" />
    )
  },
  {
    id: "Java",
    icon: <FaJava className={styles.skillIcon} color="#7f8c8d" />,
    iconBestSkill: (
      <FaJava className={styles.skillIcon} size={42} color="#e67e22" />
    )
  },
  {
    id: "PHP",
    icon: <FaPhp className={styles.skillIcon} color="#7f8c8d" />,
    iconBestSkill: (
      <FaPhp className={styles.skillIcon} size={42} color="#e67e22" />
    )
  },
  {
    id: "Angular",
    icon: <FaAngular className={styles.skillIcon} color="#7f8c8d" />,
    iconBestSkill: (
      <FaAngular className={styles.skillIcon} size={42} color="#e67e22" />
    )
  },
  {
    id: "VueJS",
    icon: <FaVuejs className={styles.skillIcon} color="#7f8c8d" />,
    iconBestSkill: (
      <FaVuejs className={styles.skillIcon} size={42} color="#e67e22" />
    )
  },
  {
    id: "Pistol",
    icon: <GiPistolGun className={styles.skillIcon} color="#7f8c8d" />,
    iconBestSkill: (
      <GiPistolGun className={styles.skillIcon} size={42} color="#e67e22" />
    )
  },
  {
    id: "Knife",
    icon: <GiTrenchKnife className={styles.skillIcon} color="#7f8c8d" />,
    iconBestSkill: (
      <GiTrenchKnife className={styles.skillIcon} size={42} color="#e67e22" />
    )
  },
  {
    id: "Rifle",
    icon: <GiWinchesterRifle className={styles.skillIcon} color="#7f8c8d" />,
    iconBestSkill: (
      <GiWinchesterRifle
        className={styles.skillIcon}
        size={42}
        color="#7f8c8d"
      />
    )
  }
];
export default class SkillWidget extends Component {
  getSkillIcon(skill, best) {
    let icon = skillsList.find(el => el.id === skill);
    return best ? icon.iconBestSkill : icon.icon;
  }

  getDefaultIcon() {
    return this.getSkillIcon("default");
  }

  generateSkillCols() {
    const { skills } = this.props;
    return (
      skills &&
      skills.map((skill, key) => {
        return key === 0
          ? this.getSkillIcon(skill, true)
          : this.getSkillIcon(skill);
      })
    );
  }

  render() {
    const { skills } = this.props;
    return (
      <Row style={{ display: "flex" }}>
        <Col style={{ paddingLeft: 0 }}>
          {skills && skills.length
            ? this.generateSkillCols()
            : this.getDefaultIcon()}
        </Col>
      </Row>
    );
  }
}
