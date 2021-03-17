const POSE_NAME = ["Address", "Take Away", "Back Swing", "Top", "Down Swing", "Impact", "Follow Through", "Finish"];

const images = [
  {
    "headers":  {
      "Cache-Control": "public, max-age=43200",
      "Content-Disposition": "attachment; filename=1615946511.660698_0.png",
      "Content-Length": "2012589",
      "Content-Type": "image/png",
      "Date": "Wed, 17 Mar 2021 02:03:31 GMT",
      "ETag": "\"1615946606.2247326-2012589-3780255594\"",
      "Expires": "Wed, 17 Mar 2021 14:03:31 GMT",
      "Last-Modified": "Wed, 17 Mar 2021 02:03:26 GMT",
      "Server": "Werkzeug/1.0.1 Python/3.7.7",
    },
    "status": 200,
    "uri": "file:///data/user/0/host.exp.exponent/files/ExperienceData/%2540anonymous%252Ffeedback-page-84eed0c0-4b7c-4af6-9cfd-06f2f6d74752/1615946511.660698/0.png",
  },
  {
    "headers":  {
      "Cache-Control": "public, max-age=43200",
      "Content-Disposition": "attachment; filename=1615946511.660698_1.png",
      "Content-Length": "2040134",
      "Content-Type": "image/png",
      "Date": "Wed, 17 Mar 2021 02:03:31 GMT",
      "ETag": "\"1615946606.8808064-2040134-3780583275\"",
      "Expires": "Wed, 17 Mar 2021 14:03:31 GMT",
      "Last-Modified": "Wed, 17 Mar 2021 02:03:26 GMT",
      "Server": "Werkzeug/1.0.1 Python/3.7.7",
    },
    "status": 200,
    "uri": "file:///data/user/0/host.exp.exponent/files/ExperienceData/%2540anonymous%252Ffeedback-page-84eed0c0-4b7c-4af6-9cfd-06f2f6d74752/1615946511.660698/1.png",
  },
  {
    "headers":  {
      "Cache-Control": "public, max-age=43200",
      "Content-Disposition": "attachment; filename=1615946511.660698_2.png",
      "Content-Length": "2075433",
      "Content-Type": "image/png",
      "Date": "Wed, 17 Mar 2021 02:03:31 GMT",
      "ETag": "\"1615946607.521302-2075433-3780910956\"",
      "Expires": "Wed, 17 Mar 2021 14:03:31 GMT",
      "Last-Modified": "Wed, 17 Mar 2021 02:03:27 GMT",
      "Server": "Werkzeug/1.0.1 Python/3.7.7",
    },
    "status": 200,
    "uri": "file:///data/user/0/host.exp.exponent/files/ExperienceData/%2540anonymous%252Ffeedback-page-84eed0c0-4b7c-4af6-9cfd-06f2f6d74752/1615946511.660698/2.png",
  },
  {
    "headers":  {
      "Cache-Control": "public, max-age=43200",
      "Content-Disposition": "attachment; filename=1615946511.660698_3.png",
      "Content-Length": "2009256",
      "Content-Type": "image/png",
      "Date": "Wed, 17 Mar 2021 02:03:31 GMT",
      "ETag": "\"1615946608.2021637-2009256-3781238637\"",
      "Expires": "Wed, 17 Mar 2021 14:03:31 GMT",
      "Last-Modified": "Wed, 17 Mar 2021 02:03:28 GMT",
      "Server": "Werkzeug/1.0.1 Python/3.7.7",
    },
    "status": 200,
    "uri": "file:///data/user/0/host.exp.exponent/files/ExperienceData/%2540anonymous%252Ffeedback-page-84eed0c0-4b7c-4af6-9cfd-06f2f6d74752/1615946511.660698/3.png",
  },
  {
    "headers":  {
      "Cache-Control": "public, max-age=43200",
      "Content-Disposition": "attachment; filename=1615946511.660698_4.png",
      "Content-Length": "1998385",
      "Content-Type": "image/png",
      "Date": "Wed, 17 Mar 2021 02:03:31 GMT",
      "ETag": "\"1615946608.8426375-1998385-3781566318\"",
      "Expires": "Wed, 17 Mar 2021 14:03:31 GMT",
      "Last-Modified": "Wed, 17 Mar 2021 02:03:28 GMT",
      "Server": "Werkzeug/1.0.1 Python/3.7.7",
    },
    "status": 200,
    "uri": "file:///data/user/0/host.exp.exponent/files/ExperienceData/%2540anonymous%252Ffeedback-page-84eed0c0-4b7c-4af6-9cfd-06f2f6d74752/1615946511.660698/4.png",
  },
  {
    "headers":  {
      "Cache-Control": "public, max-age=43200",
      "Content-Disposition": "attachment; filename=1615946511.660698_5.png",
      "Content-Length": "1970458",
      "Content-Type": "image/png",
      "Date": "Wed, 17 Mar 2021 02:03:49 GMT",
      "ETag": "\"1615946609.4987333-1970458-3781893999\"",
      "Expires": "Wed, 17 Mar 2021 14:03:49 GMT",
      "Last-Modified": "Wed, 17 Mar 2021 02:03:29 GMT",
      "Server": "Werkzeug/1.0.1 Python/3.7.7",
    },
    "status": 200,
    "uri": "file:///data/user/0/host.exp.exponent/files/ExperienceData/%2540anonymous%252Ffeedback-page-84eed0c0-4b7c-4af6-9cfd-06f2f6d74752/1615946511.660698/5.png",
  },
  {
    "headers":  {
      "Cache-Control": "public, max-age=43200",
      "Content-Disposition": "attachment; filename=1615946511.660698_6.png",
      "Content-Length": "1987322",
      "Content-Type": "image/png",
      "Date": "Wed, 17 Mar 2021 02:04:05 GMT",
      "ETag": "\"1615946610.1548285-1987322-3782221680\"",
      "Expires": "Wed, 17 Mar 2021 14:04:05 GMT",
      "Last-Modified": "Wed, 17 Mar 2021 02:03:30 GMT",
      "Server": "Werkzeug/1.0.1 Python/3.7.7",
    },
    "status": 200,
    "uri": "file:///data/user/0/host.exp.exponent/files/ExperienceData/%2540anonymous%252Ffeedback-page-84eed0c0-4b7c-4af6-9cfd-06f2f6d74752/1615946511.660698/6.png",
  },
  {
    "headers": {
      "Cache-Control": "public, max-age=43200",
      "Content-Disposition": "attachment; filename=1615946511.660698_7.png",
      "Content-Length": "1987322",
      "Content-Type": "image/png",
      "Date": "Wed, 17 Mar 2021 02:04:08 GMT",
      "ETag": "\"1615946610.782812-1987322-3782549361\"",
      "Expires": "Wed, 17 Mar 2021 14:04:08 GMT",
      "Last-Modified": "Wed, 17 Mar 2021 02:03:30 GMT",
      "Server": "Werkzeug/1.0.1 Python/3.7.7",
    },
    "status": 200,
    "uri": "file:///data/user/0/host.exp.exponent/files/ExperienceData/%2540anonymous%252Ffeedback-page-84eed0c0-4b7c-4af6-9cfd-06f2f6d74752/1615946511.660698/7.png",
  },
]

const result = {
    "0": {},
    "1": {
      "bending_arms": {
        "0": 2,
        "1": 160.88356836956808,
        "2": "팔 구부러짐이 없습니다.",
      },
      "early_cocking": {
        "0": 0,
        "1": 44.50154482157481,
        "2": "코킹을 늦춰보세요. 이른 코킹은 비거리 손실을 가져옵니다.",
      },
    },
    "2": {
      "bending_arms": {
        "0": 2,
        "1": 145.44848843841066,
        "2": "팔 구부러짐이 없습니다.",
      },
      "foot_flying": {
        "0": 2,
        "1": -0.10498046875,
        "2": "",
      },
      "head_position": {
        "0": 2,
        "1": -0.09967041015625,
        "2": "척추 각도가 안정적입니다.",
      },
      "left_knee_moving": {
        "0": 2,
        "1": 177.81426716699414,
        "2": "good",
      },
      "reverse_pivot": {
        "0": 2,
        "1": 81.97745098373032,
        "2": "체중 이동이 정상적입니다.",
      },
      "sway": {
        "0": 2,
        "1": 9.002822875976562,
        "2": "상체가 축을 중심으로 회전하고 있습니다.",
      },
    },
    "3": {
      "bending_arms": {
        "0": 2,
        "1": 145.82820328974728,
        "2": "팔 구부러짐이 없습니다.",
      },
      "left_knee_moving": {
        "0": 2,
        "1": 177.54240846145225,
        "2": "good",
      },
      "reverse_pivot": {
        "0": 2,
        "1": 81.23694365414828,
        "2": "체중 이동이 정상적입니다.",
      },
    },
    "4": {},
    "5": {},
    "6": {},
    "7": {},
    "image_path": 1615944434.036905,
  }

const TEST_DATA = Object.keys(result)
                .filter(key => (
                    key !== 'image_path'
                ))
                .map(key => ({
                    key: POSE_NAME[key],
                    feedback: result[key],
                    image: images[key].uri,
                }));

export default TEST_DATA;