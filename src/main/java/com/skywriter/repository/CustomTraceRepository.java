package com.skywriter.repository;


import com.skywriter.domain.Track;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.actuate.trace.InMemoryTraceRepository;
import org.springframework.boot.actuate.trace.Trace;
import org.springframework.boot.actuate.trace.TraceRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class CustomTraceRepository implements TraceRepository {

    private static final Logger log = LoggerFactory.getLogger(CustomTraceRepository.class);

    private final TraceRepository delegate = new InMemoryTraceRepository();
    private final TrackRepository trackRepository;

    Map<String, Object> t = new HashMap<>();

    List<String> json = new ArrayList<>();

    public CustomTraceRepository(TrackRepository trackRepository) {
        this.trackRepository = trackRepository;
    }

    @Override
    public List<Trace> findAll() {
        return delegate.findAll();
    }

    @Override
    public void add(Map<String, Object> traceInfo) {

        log.info(traceInfo.toString());
        Track tracktest = new Track();
        this.delegate.add(traceInfo);
        json.add(traceInfo.toString());
        tracktest.setDetails(traceInfo.toString());
        trackRepository.save(tracktest);

        System.out.println(json);

    }


}

