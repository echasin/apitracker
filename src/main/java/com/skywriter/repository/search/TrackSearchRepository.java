package com.skywriter.repository.search;

import com.skywriter.domain.Track;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Track entity.
 */
public interface TrackSearchRepository extends ElasticsearchRepository<Track, Long> {
}
